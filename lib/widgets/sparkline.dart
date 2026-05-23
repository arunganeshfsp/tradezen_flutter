import 'package:flutter/material.dart';

class Sparkline extends StatelessWidget {
  final List<double> data;
  final Color color;
  final double height;
  final bool fill;
  final double strokeWidth;

  const Sparkline({
    super.key,
    required this.data,
    required this.color,
    this.height = 40,
    this.fill = true,
    this.strokeWidth = 1.6,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      width: double.infinity,
      child: CustomPaint(painter: _SparkPainter(data, color, fill, strokeWidth)),
    );
  }
}

class _SparkPainter extends CustomPainter {
  final List<double> data;
  final Color color;
  final bool fill;
  final double sw;

  const _SparkPainter(this.data, this.color, this.fill, this.sw);

  @override
  void paint(Canvas canvas, Size size) {
    if (data.length < 2) return;

    final stepX = size.width / (data.length - 1);
    final pts = List.generate(data.length, (i) {
      final x = i * stepX;
      final y = size.height - data[i] * (size.height - 4) - 2;
      return Offset(x, y);
    });

    if (fill) {
      final fillPath = Path()..moveTo(pts.first.dx, pts.first.dy);
      for (final pt in pts.skip(1)) {
        fillPath.lineTo(pt.dx, pt.dy);
      }
      fillPath.lineTo(size.width, size.height);
      fillPath.lineTo(0, size.height);
      fillPath.close();

      final grad = Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [color.withOpacity(0.25), color.withOpacity(0)],
        ).createShader(Rect.fromLTWH(0, 0, size.width, size.height));
      canvas.drawPath(fillPath, grad);
    }

    final linePath = Path()..moveTo(pts.first.dx, pts.first.dy);
    for (final pt in pts.skip(1)) {
      linePath.lineTo(pt.dx, pt.dy);
    }

    canvas.drawPath(linePath, Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = sw
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round);
  }

  @override
  bool shouldRepaint(_SparkPainter old) =>
      old.data != data || old.color != color || old.fill != fill || old.sw != sw;
}
