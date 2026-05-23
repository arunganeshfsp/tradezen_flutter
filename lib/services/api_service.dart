import 'dart:convert';
import 'package:http/http.dart' as http;
import '../config/app_config.dart';

class ApiService {
  static final ApiService _instance = ApiService._();
  factory ApiService() => _instance;
  ApiService._();

  final _client = http.Client();

  Uri _url(String path, [Map<String, String>? params]) {
    final uri = Uri.parse('${AppConfig.baseUrl}$path');
    return params != null ? uri.replace(queryParameters: params) : uri;
  }

  Future<Map<String, dynamic>> get(String path,
      [Map<String, String>? params]) async {
    final res = await _client.get(_url(path, params));
    if (res.statusCode != 200) {
      throw ApiException(res.statusCode, path);
    }
    return json.decode(res.body) as Map<String, dynamic>;
  }

  Future<List<dynamic>> getList(String path,
      [Map<String, String>? params]) async {
    final res = await _client.get(_url(path, params));
    if (res.statusCode != 200) {
      throw ApiException(res.statusCode, path);
    }
    return json.decode(res.body) as List<dynamic>;
  }

  Future<Map<String, dynamic>> post(String path,
      [Map<String, dynamic>? body]) async {
    final res = await _client.post(
      _url(path),
      headers: {'Content-Type': 'application/json'},
      body: body != null ? json.encode(body) : null,
    );
    if (res.statusCode != 200 && res.statusCode != 201) {
      throw ApiException(res.statusCode, path);
    }
    return json.decode(res.body) as Map<String, dynamic>;
  }

  Future<void> delete(String path) async {
    final res = await _client.delete(_url(path));
    if (res.statusCode != 200 && res.statusCode != 204) {
      throw ApiException(res.statusCode, path);
    }
  }
}

class ApiException implements Exception {
  final int statusCode;
  final String path;
  ApiException(this.statusCode, this.path);

  @override
  String toString() => 'ApiException: $statusCode on $path';
}
