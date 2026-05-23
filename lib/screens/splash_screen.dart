import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'dashboard_screen.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.darkBg,
      body: Stack(
        children: [
          // Radial halo gradient
          Positioned.fill(
            child: DecoratedBox(
              decoration: const BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0, -0.3),
                  radius: 0.9,
                  colors: [Color(0x8C7C6AF7), Colors.transparent],
                  stops: [0.0, 0.65],
                ),
              ),
            ),
          ),
          Positioned.fill(
            child: DecoratedBox(
              decoration: const BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0, 0.4),
                  radius: 0.7,
                  colors: [Color(0x4D5B8AF5), Colors.transparent],
                  stops: [0.0, 0.60],
                ),
              ),
            ),
          ),

          // Grid overlay with mask
          Positioned.fill(child: _GridOverlay()),

          // Center content
          Positioned.fill(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Logo box
                Container(
                  width: 88,
                  height: 88,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: AppColors.auroraGrad,
                    ),
                    borderRadius: BorderRadius.circular(22),
                    boxShadow: const [
                      BoxShadow(color: Color(0x807C6AF7), blurRadius: 60, offset: Offset(0, 20)),
                    ],
                  ),
                  child: CustomPaint(painter: _LogoPainter()),
                ),
                const SizedBox(height: 28),
                // TradeZen.
                RichText(
                  text: TextSpan(
                    style: AppTheme.serif(56, AppColors.darkFg1),
                    children: const [
                      TextSpan(text: 'Trade'),
                      TextSpan(text: 'Zen.', style: TextStyle(fontStyle: FontStyle.italic)),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                Text(
                  'Markets move. Stay still.',
                  style: AppTheme.serif(17, AppColors.darkFg2).copyWith(fontStyle: FontStyle.italic, height: 1.4),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),

          // CTA at bottom
          Positioned(
            left: 24, right: 24, bottom: 60,
            child: Column(
              children: [
                // Open dashboard
                GestureDetector(
                  onTap: () => Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (_) => const DashboardScreen()),
                  ),
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 18),
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight,
                        colors: AppColors.auroraGrad,
                      ),
                      borderRadius: BorderRadius.circular(14),
                      boxShadow: const [
                        BoxShadow(color: Color(0x667C6AF7), blurRadius: 36, offset: Offset(0, 12)),
                      ],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('Open dashboard',
                          style: AppTheme.mono(15, Colors.white, weight: FontWeight.w600)),
                        const SizedBox(width: 10),
                        const Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                // I have an account
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 13, horizontal: 18),
                  decoration: BoxDecoration(
                    color: Colors.transparent,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: AppColors.darkBorderStrong),
                  ),
                  child: Center(
                    child: Text('I have an account',
                      style: AppTheme.mono(14, AppColors.darkFg1, weight: FontWeight.w500)),
                  ),
                ),
                const SizedBox(height: 18),
                // EN · தமிழ்
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('EN', style: AppTheme.mono(10, AppColors.darkFg3)),
                    Text('  ·  ', style: AppTheme.mono(10, AppColors.darkFg3).copyWith(color: const Color(0x66585D7E))),
                    Text('தமிழ்', style: AppTheme.tamil(10, AppColors.darkFg3)),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _GridOverlay extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ShaderMask(
      shaderCallback: (bounds) => const RadialGradient(
        center: Alignment(0, -0.3),
        radius: 0.75,
        colors: [Colors.black, Colors.transparent],
        stops: [0.0, 0.75],
      ).createShader(bounds),
      blendMode: BlendMode.dstIn,
      child: Opacity(
        opacity: 0.5,
        child: CustomPaint(painter: _GridPainter()),
      ),
    );
  }
}

class _GridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = const Color(0x12FFFFFF)
      ..strokeWidth = 1;
    const step = 40.0;
    for (double x = 0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), p);
    }
    for (double y = 0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), p);
    }
  }

  @override
  bool shouldRepaint(_GridPainter _) => false;
}

class _LogoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final s = size.width / 46;
    canvas.translate(size.width / 2, size.height / 2);
    canvas.scale(s, s);
    canvas.translate(-23, -23);

    final dark = Paint()
      ..color = const Color(0xFF0A0C18)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round;

    final white = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.8
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // TZ letterform (dark stroke on gradient bg)
    canvas.drawLine(const Offset(10, 12), const Offset(19, 12), dark);
    canvas.drawLine(const Offset(14.5, 12), const Offset(14.5, 27), dark);
    canvas.drawLine(const Offset(21, 12), const Offset(30, 12), dark);
    canvas.drawLine(const Offset(21, 21), const Offset(30, 21), dark);
    canvas.drawLine(const Offset(30, 12), const Offset(21, 21), dark);

    // Mini sparkline (white)
    final spark = Path()
      ..moveTo(21, 20)..lineTo(24, 16.5)..lineTo(27, 18.5)..lineTo(30, 13.5);
    canvas.drawPath(spark, white);
  }

  @override
  bool shouldRepaint(_LogoPainter _) => false;
}
