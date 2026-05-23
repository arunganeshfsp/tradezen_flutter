import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

enum NavTab { home, flow, options, learn, account }

class BottomNavBar extends StatelessWidget {
  final NavTab active;
  final ValueChanged<NavTab> onTap;

  const BottomNavBar({super.key, required this.active, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(12, 0, 12, 18),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
        decoration: BoxDecoration(
          color: const Color(0xC70E1124),
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: AppColors.darkBorder),
          boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 40, offset: Offset(0, 20))],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _NavItem(tab: NavTab.home,    iconType: NavIconType.grid,     label: 'Overview', active: active, onTap: onTap),
            _NavItem(tab: NavTab.flow,    iconType: NavIconType.activity, label: 'Flow',     active: active, onTap: onTap),
            _NavItem(tab: NavTab.options, iconType: NavIconType.layers,   label: 'Options',  active: active, onTap: onTap),
            _NavItem(tab: NavTab.learn,   iconType: NavIconType.book,     label: 'Learn',    active: active, onTap: onTap),
            _NavItem(tab: NavTab.account, iconType: NavIconType.user,     label: 'Account',  active: active, onTap: onTap),
          ],
        ),
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  final NavTab tab;
  final NavIconType iconType;
  final String label;
  final NavTab active;
  final ValueChanged<NavTab> onTap;

  const _NavItem({required this.tab, required this.iconType, required this.label, required this.active, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final on = tab == active;
    return GestureDetector(
      onTap: () => onTap(tab),
      behavior: HitTestBehavior.opaque,
      child: SizedBox(
        width: 60,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (on)
              Container(
                width: 36, height: 30,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: AppColors.auroraGrad,
                  ),
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: const [BoxShadow(color: Color(0x667C6AF7), blurRadius: 12, offset: Offset(0, 6))],
                ),
                child: Center(child: NavIconPainter.widget(iconType, 16, Colors.white)),
              )
            else
              NavIconPainter.widget(iconType, 20, AppColors.darkFg3),
            const SizedBox(height: 3),
            Text(
              label,
              style: AppTheme.mono(9.5, on ? AppColors.darkFg1 : AppColors.darkFg3,
                  weight: on ? FontWeight.w600 : FontWeight.w500),
            ),
          ],
        ),
      ),
    );
  }
}

enum NavIconType { grid, activity, layers, book, user }

class NavIconPainter {
  static Widget widget(NavIconType icon, double size, Color color) {
    return CustomPaint(size: Size(size, size), painter: _IconPainter(icon, color));
  }
}

class _IconPainter extends CustomPainter {
  final NavIconType icon;
  final Color color;
  const _IconPainter(this.icon, this.color);

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = size.width * 0.065
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    final s = size.width / 24;
    canvas.scale(s, s);

    switch (icon) {
      case NavIconType.grid:
        _rect(canvas, p, 3, 3, 7, 7);
        _rect(canvas, p, 14, 3, 7, 7);
        _rect(canvas, p, 14, 14, 7, 7);
        _rect(canvas, p, 3, 14, 7, 7);
        break;
      case NavIconType.activity:
        final path = Path()
          ..moveTo(22, 12)..lineTo(18, 12)..lineTo(15, 21)..lineTo(9, 3)..lineTo(6, 12)..lineTo(2, 12);
        canvas.drawPath(path, p);
        break;
      case NavIconType.layers:
        final p1 = Path()..moveTo(12, 2)..lineTo(2, 7)..lineTo(12, 12)..lineTo(22, 7)..close();
        canvas.drawPath(p1, p);
        canvas.drawPath(Path()..moveTo(2, 17)..lineTo(12, 22)..lineTo(22, 17), p);
        canvas.drawPath(Path()..moveTo(2, 12)..lineTo(12, 17)..lineTo(22, 12), p);
        break;
      case NavIconType.book:
        final p1 = Path()
          ..moveTo(2, 3)..lineTo(8, 3)
          ..cubicTo(10.2, 3, 12, 4.8, 12, 7)..lineTo(12, 21)
          ..cubicTo(12, 19.3, 10.7, 18, 9, 18)..lineTo(2, 18)..close();
        canvas.drawPath(p1, p);
        final p2 = Path()
          ..moveTo(22, 3)..lineTo(16, 3)
          ..cubicTo(13.8, 3, 12, 4.8, 12, 7)..lineTo(12, 21)
          ..cubicTo(12, 19.3, 13.3, 18, 15, 18)..lineTo(22, 18)..close();
        canvas.drawPath(p2, p);
        break;
      case NavIconType.user:
        final bodyPath = Path()
          ..moveTo(20, 21)..lineTo(20, 19)
          ..cubicTo(20, 16.8, 18.2, 15, 16, 15)..lineTo(8, 15)
          ..cubicTo(5.8, 15, 4, 16.8, 4, 19)..lineTo(4, 21);
        canvas.drawPath(bodyPath, p);
        canvas.drawCircle(const Offset(12, 7), 4, p);
        break;
    }
  }

  void _rect(Canvas canvas, Paint p, double x, double y, double w, double h) {
    canvas.drawRRect(RRect.fromLTRBR(x, y, x + w, y + h, const Radius.circular(1)), p);
  }

  @override
  bool shouldRepaint(_IconPainter old) => old.icon != icon || old.color != color;
}
