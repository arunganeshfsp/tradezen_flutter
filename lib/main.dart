import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'theme/app_theme.dart';
import 'screens/splash_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final savedTheme = prefs.getString('halo-theme') ?? 'dark';
  runApp(TradeZenApp(initialTheme: savedTheme));
}

class TradeZenApp extends StatefulWidget {
  final String initialTheme;
  const TradeZenApp({super.key, required this.initialTheme});

  static TradeZenAppState of(BuildContext context) =>
      context.findAncestorStateOfType<TradeZenAppState>()!;

  @override
  State<TradeZenApp> createState() => TradeZenAppState();
}

class TradeZenAppState extends State<TradeZenApp> {
  late ThemeMode _themeMode;

  @override
  void initState() {
    super.initState();
    _themeMode =
        widget.initialTheme == 'light' ? ThemeMode.light : ThemeMode.dark;
  }

  void toggleTheme() async {
    final next =
        _themeMode == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;
    setState(() => _themeMode = next);
    final prefs = await SharedPreferences.getInstance();
    prefs.setString('halo-theme', next == ThemeMode.dark ? 'dark' : 'light');
  }

  ThemeMode get themeMode => _themeMode;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TradeZen',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      darkTheme: AppTheme.dark(),
      themeMode: _themeMode,
      home: const SplashScreen(),
    );
  }
}
