import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Image.network(
              'https://tradeze.in/app-icon.svg',
              width: 28,
              height: 28,
              errorBuilder: (_, __, ___) => const Icon(Icons.show_chart,
                  color: AppColors.amber, size: 28),
            ),
            const SizedBox(width: 10),
            const Text('TradeZen',
                style: TextStyle(fontWeight: FontWeight.w700)),
          ],
        ),
      ),
      body: const Center(
        child: Text('Home — coming soon'),
      ),
    );
  }
}
