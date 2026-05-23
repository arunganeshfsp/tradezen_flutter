import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/bottom_nav_bar.dart';
import '../widgets/sparkline.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  NavTab _active = NavTab.home;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.darkBg,
      body: Stack(
        children: [
          // Halo gradient top zone
          Positioned(
            top: 0, left: 0, right: 0, height: 300,
            child: DecoratedBox(
              decoration: const BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(-0.6, -0.7),
                  radius: 1.2,
                  colors: [Color(0x4D7C6AF7), Colors.transparent],
                  stops: [0.0, 0.60],
                ),
              ),
            ),
          ),
          Positioned(
            top: 0, left: 0, right: 0, height: 300,
            child: DecoratedBox(
              decoration: const BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0.7, -0.5),
                  radius: 1.0,
                  colors: [Color(0x3D5B8AF5), Colors.transparent],
                  stops: [0.0, 0.60],
                ),
              ),
            ),
          ),

          // Scrollable content
          Positioned.fill(
            child: SafeArea(
              bottom: false,
              child: CustomScrollView(
                slivers: [
                  const SliverPadding(
                    padding: EdgeInsets.fromLTRB(20, 12, 20, 0),
                    sliver: SliverToBoxAdapter(child: _Header()),
                  ),
                  const SliverPadding(
                    padding: EdgeInsets.fromLTRB(20, 18, 20, 0),
                    sliver: SliverToBoxAdapter(child: _NiftyCard()),
                  ),
                  const SliverPadding(
                    padding: EdgeInsets.fromLTRB(20, 10, 20, 0),
                    sliver: SliverToBoxAdapter(child: _SecondaryCards()),
                  ),
                  const SliverPadding(
                    padding: EdgeInsets.fromLTRB(20, 14, 20, 0),
                    sliver: SliverToBoxAdapter(child: _AiCard()),
                  ),
                  SliverPadding(
                    padding: const EdgeInsets.fromLTRB(20, 22, 20, 0),
                    sliver: SliverToBoxAdapter(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('Quick actions',
                            style: AppTheme.mono(14, AppColors.darkFg1, weight: FontWeight.w700)
                                .copyWith(letterSpacing: -0.14)),
                          Text('6 TOOLS',
                            style: AppTheme.mono(10, AppColors.darkFg3)),
                        ],
                      ),
                    ),
                  ),
                  const SliverPadding(
                    padding: EdgeInsets.fromLTRB(20, 12, 20, 120),
                    sliver: SliverToBoxAdapter(child: _QuickActions()),
                  ),
                ],
              ),
            ),
          ),

          // Bottom nav
          Positioned(
            left: 0, right: 0, bottom: 0,
            child: BottomNavBar(active: _active, onTap: (t) => setState(() => _active = t)),
          ),
        ],
      ),
    );
  }
}

// ── Header ───────────────────────────────────────────────────
class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('FRI · 23 MAY · LIVE',
              style: AppTheme.mono(10.5, AppColors.darkFg3).copyWith(letterSpacing: 0.16 * 10.5)),
            const SizedBox(height: 4),
            RichText(
              text: TextSpan(
                style: AppTheme.serif(28, AppColors.darkFg1).copyWith(height: 1.1, letterSpacing: -0.56),
                children: const [
                  TextSpan(text: 'Good '),
                  TextSpan(text: 'afternoon', style: TextStyle(fontStyle: FontStyle.italic)),
                ],
              ),
            ),
          ],
        ),
        Container(
          width: 38, height: 38,
          decoration: BoxDecoration(
            color: AppColors.darkSurface,
            shape: BoxShape.circle,
            border: Border.all(color: AppColors.darkBorder),
          ),
          child: Stack(
            children: [
              Center(child: Icon(Icons.notifications_outlined, color: AppColors.darkFg2, size: 17)),
              Positioned(
                top: 8, right: 8,
                child: Container(
                  width: 8, height: 8,
                  decoration: BoxDecoration(
                    color: AppColors.accent1,
                    shape: BoxShape.circle,
                    border: Border.all(color: AppColors.darkSurface, width: 2),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

// ── NIFTY hero card ──────────────────────────────────────────
class _NiftyCard extends StatelessWidget {
  const _NiftyCard();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: AppColors.darkSurface,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0x597C6AF7)),
      ),
      child: Stack(
        children: [
          Positioned.fill(
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(18),
                gradient: const RadialGradient(
                  center: Alignment(-1.0, 1.0),
                  radius: 1.2,
                  colors: [Color(0x2E7C6AF7), Colors.transparent],
                  stops: [0.0, 0.70],
                ),
              ),
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('NIFTY 50 · SPOT',
                style: AppTheme.mono(10.5, AppColors.darkFg3).copyWith(letterSpacing: 0.16 * 10.5)),
              const SizedBox(height: 6),
              Text('22,847.40',
                style: AppTheme.mono(38, AppColors.darkFg1, weight: FontWeight.w700)
                    .copyWith(letterSpacing: -0.02 * 38)),
              const SizedBox(height: 6),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0x2634D399),
                  borderRadius: BorderRadius.circular(5),
                ),
                child: Text('▲ +315.20 · +1.40%',
                  style: AppTheme.mono(11.5, AppColors.gain, weight: FontWeight.w700)),
              ),
              const SizedBox(height: 14),
              Sparkline(data: _sparkUp, color: AppColors.gain, height: 56),
            ],
          ),
        ],
      ),
    );
  }
}

// ── Secondary cards (BANKNIFTY + VIX) ───────────────────────
class _SecondaryCards extends StatelessWidget {
  const _SecondaryCards();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        Expanded(child: _MiniCard(label: 'BANKNIFTY', value: '48,440', change: '+0.92%', gain: true,  data: _sparkUp)),
        SizedBox(width: 10),
        Expanded(child: _MiniCard(label: 'INDIA VIX',  value: '13.42',  change: '−2.10%', gain: false, data: _sparkDn)),
      ],
    );
  }
}

class _MiniCard extends StatelessWidget {
  final String label, value, change;
  final bool gain;
  final List<double> data;

  const _MiniCard({required this.label, required this.value, required this.change, required this.gain, required this.data});

  @override
  Widget build(BuildContext context) {
    final col = gain ? AppColors.gain : AppColors.loss;
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.darkSurface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: AppColors.darkBorder),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(label, style: AppTheme.mono(9.5, AppColors.darkFg3).copyWith(letterSpacing: 0.14 * 9.5)),
              Text(change, style: AppTheme.mono(10.5, col, weight: FontWeight.w700)),
            ],
          ),
          const SizedBox(height: 4),
          Text(value, style: AppTheme.mono(18, AppColors.darkFg1, weight: FontWeight.w700)),
          const SizedBox(height: 4),
          Sparkline(data: data, color: col, height: 26),
        ],
      ),
    );
  }
}

// ── AI insight card ──────────────────────────────────────────
class _AiCard extends StatelessWidget {
  const _AiCard();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0x0F7C6AF7),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0x597C6AF7)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 34, height: 34,
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: AppColors.auroraGrad,
              ),
              borderRadius: BorderRadius.circular(10),
              boxShadow: const [BoxShadow(color: Color(0x667C6AF7), blurRadius: 16, offset: Offset(0, 6))],
            ),
            child: const Center(child: Icon(Icons.auto_awesome, color: Colors.white, size: 16)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Zen Assistant',
                      style: AppTheme.mono(12.5, AppColors.darkFg1, weight: FontWeight.w700)),
                    Text('● LIVE',
                      style: AppTheme.mono(9.5, AppColors.darkFg3).copyWith(letterSpacing: 0.14 * 9.5)),
                  ],
                ),
                const SizedBox(height: 6),
                RichText(
                  text: TextSpan(
                    style: const TextStyle(fontSize: 13, color: AppColors.darkFg1, height: 1.5),
                    children: [
                      const TextSpan(text: 'Holding above pivot. Watching '),
                      TextSpan(text: '22,866',
                        style: AppTheme.mono(13, AppColors.accent1, weight: FontWeight.w700)),
                      const TextSpan(text: ' — a clean break opens 22,975.'),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8,
                  children: const [
                    _Tag('BULLISH', AppColors.gain, Color(0x2634D399)),
                    _Tag('78% conviction', AppColors.darkFg2, AppColors.darkSurface),
                    _Tag('R:R 1:2.4', AppColors.darkFg2, AppColors.darkSurface),
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

class _Tag extends StatelessWidget {
  final String text;
  final Color fg, bg;
  const _Tag(this.text, this.fg, this.bg);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(4)),
      child: Text(text, style: AppTheme.mono(10.5, fg, weight: FontWeight.w700)),
    );
  }
}

// ── Quick actions ─────────────────────────────────────────────
class _ActionItem {
  final _QIcon icon;
  final String title;
  final String sub;
  const _ActionItem(this.icon, this.title, this.sub);
}

class _QuickActions extends StatelessWidget {
  const _QuickActions();

  static const _items = [
    _ActionItem(_QIcon.activity, 'Trade Flow',  'CPR · ORB live'),
    _ActionItem(_QIcon.layers,   'Options',     'Chain · Greeks'),
    _ActionItem(_QIcon.radar,    'F&O Scanner', 'Live dominance'),
    _ActionItem(_QIcon.trending, 'Movers',      'Top 10 daily'),
  ];

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisSpacing: 10,
      mainAxisSpacing: 10,
      childAspectRatio: 1.45,
      children: _items
          .map((item) => _ActionCard(icon: item.icon, title: item.title, sub: item.sub))
          .toList(),
    );
  }
}

enum _QIcon { activity, layers, radar, trending }

class _ActionCard extends StatelessWidget {
  final _QIcon icon;
  final String title, sub;
  const _ActionCard({required this.icon, required this.title, required this.sub});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppColors.darkSurface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: AppColors.darkBorder),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            width: 36, height: 36,
            decoration: BoxDecoration(
              color: const Color(0x1A7C6AF7),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0x597C6AF7)),
            ),
            child: Center(child: CustomPaint(size: const Size(17, 17), painter: _QIconPainter(icon))),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title,
                style: AppTheme.mono(14, AppColors.darkFg1, weight: FontWeight.w700)
                    .copyWith(letterSpacing: -0.14)),
              const SizedBox(height: 2),
              Text(sub,
                style: AppTheme.mono(10.5, AppColors.darkFg3).copyWith(letterSpacing: 0.06 * 10.5)),
            ],
          ),
        ],
      ),
    );
  }
}

class _QIconPainter extends CustomPainter {
  final _QIcon icon;
  const _QIconPainter(this.icon);

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = AppColors.accent1
      ..style = PaintingStyle.stroke
      ..strokeWidth = size.width * 0.09
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    final s = size.width / 24;
    canvas.scale(s, s);

    switch (icon) {
      case _QIcon.activity:
        canvas.drawPath(
          Path()..moveTo(22, 12)..lineTo(18, 12)..lineTo(15, 21)..lineTo(9, 3)..lineTo(6, 12)..lineTo(2, 12), p);
        break;
      case _QIcon.layers:
        canvas.drawPath(Path()..moveTo(12, 2)..lineTo(2, 7)..lineTo(12, 12)..lineTo(22, 7)..close(), p);
        canvas.drawPath(Path()..moveTo(2, 17)..lineTo(12, 22)..lineTo(22, 17), p);
        canvas.drawPath(Path()..moveTo(2, 12)..lineTo(12, 17)..lineTo(22, 12), p);
        break;
      case _QIcon.radar:
        canvas.drawCircle(const Offset(12, 12), 9, p);
        canvas.drawCircle(const Offset(12, 12), 5, p);
        canvas.drawLine(const Offset(12, 12), const Offset(20, 6), p);
        break;
      case _QIcon.trending:
        canvas.drawPath(
          Path()..moveTo(23, 6)..lineTo(13.5, 15.5)..lineTo(8.5, 10.5)..lineTo(1, 18), p);
        canvas.drawPath(Path()..moveTo(17, 6)..lineTo(23, 6)..lineTo(23, 12), p);
        break;
    }
  }

  @override
  bool shouldRepaint(_QIconPainter old) => old.icon != icon;
}

// ── Sparkline data ─────────────────────────────────────────────
const _sparkUp = <double>[0.40,0.45,0.50,0.55,0.52,0.58,0.62,0.59,0.65,0.68,0.64,0.70,0.74,0.78,0.82,0.85,0.83,0.88,0.92,0.95];
const _sparkDn = <double>[0.85,0.82,0.78,0.80,0.75,0.72,0.68,0.65,0.62,0.55,0.50,0.45,0.42,0.38,0.30,0.25,0.28,0.22,0.18,0.15];
