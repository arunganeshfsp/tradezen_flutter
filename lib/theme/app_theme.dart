import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// Exact values from figma/tokens.json
class AppColors {
  // ── Dark ───────────────────────────────────────────────
  static const darkBg       = Color(0xFF06070F);  // bg.page
  static const darkBgElev   = Color(0xFF0A0C1E);  // bg.elev
  static const darkSurface  = Color(0xFF0E1124);  // bg.surface
  static const darkSurface2 = Color(0xFF161A32);  // bg.surface-2
  static const darkBorder   = Color(0x12FFFFFF);  // rgba(255,255,255,0.07)
  static const darkBorderStrong = Color(0x26FFFFFF); // rgba(255,255,255,0.15)
  static const darkFg1      = Color(0xFFF0F1F8);  // fg.primary
  static const darkFg2      = Color(0xFF9EA3C0);  // fg.secondary
  static const darkFg3      = Color(0xFF585D7E);  // fg.tertiary
  static const darkGainBg   = Color(0x2634D399);  // chip.gain-bg
  static const darkLossBg   = Color(0x26F87171);  // chip.loss-bg

  // ── Light ──────────────────────────────────────────────
  static const lightBg       = Color(0xFFF6F4FF);  // bg.page
  static const lightBgElev   = Color(0xFFFFFFFF);  // bg.elev
  static const lightSurface  = Color(0xFFFFFFFF);  // bg.surface
  static const lightSurface2 = Color(0xFFF0EEFB);  // bg.surface-2
  static const lightBorder   = Color(0x140F1020);  // rgba(15,16,32,0.08)
  static const lightBorderStrong = Color(0x280F1020); // rgba(15,16,32,0.16)
  static const lightFg1      = Color(0xFF0F1020);  // fg.primary
  static const lightFg2      = Color(0xFF4A4F6E);  // fg.secondary
  static const lightFg3      = Color(0xFF9EA3BE);  // fg.tertiary
  static const lightGainBg   = Color(0x1F0E9966);  // chip.gain-bg
  static const lightLossBg   = Color(0x1AC43D3D);  // chip.loss-bg

  // ── Shared (core tokens) ───────────────────────────────
  static const accent1  = Color(0xFF7C6AF7);  // aurora purple
  static const accent2  = Color(0xFF5B8AF5);  // aurora blue
  static const gain     = Color(0xFF34D399);  // semantic.gain
  static const loss     = Color(0xFFF87171);  // semantic.loss
  static const warning  = Color(0xFFFBBF24);  // semantic.warning
  static const info     = Color(0xFF60A5FA);  // semantic.info
  static const amber    = Color(0xFFF5A524);  // app icon brand colour

  // ── Aurora gradient (135°) ─────────────────────────────
  static const List<Color> auroraGrad = [accent1, accent2];
}

class AppRadius {
  static const sm   = 6.0;
  static const md   = 8.0;
  static const lg   = 12.0;
  static const xl   = 16.0;
  static const xl2  = 18.0;
  static const full = 999.0;
}

class AppSpacing {
  static const s1 = 4.0;
  static const s2 = 8.0;
  static const s3 = 12.0;
  static const s4 = 16.0;
  static const s5 = 24.0;
  static const s6 = 32.0;
  static const s7 = 48.0;
  static const s8 = 64.0;
  static const s9 = 96.0;
}

class AppFontSize {
  static const xs   = 11.0;
  static const sm   = 13.0;
  static const base = 15.0;
  static const md   = 17.0;
  static const lg   = 20.0;
  static const xl   = 24.0;
  static const xl2  = 30.0;
  static const xl3  = 38.0;
  static const xl4  = 48.0;
}

class AppTheme {
  static ThemeData dark() {
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: AppColors.darkBg,
      colorScheme: const ColorScheme.dark(
        background: AppColors.darkBg,
        surface:    AppColors.darkSurface,
        primary:    AppColors.accent1,
        secondary:  AppColors.accent2,
        error:      AppColors.loss,
        onBackground: AppColors.darkFg1,
        onSurface:    AppColors.darkFg1,
        onPrimary:    Colors.white,
      ),
      cardColor: AppColors.darkSurface,
      dividerColor: AppColors.darkBorder,
      textTheme: _textTheme(AppColors.darkFg1, AppColors.darkFg2, AppColors.darkFg3),
      appBarTheme: const AppBarTheme(
        backgroundColor: AppColors.darkSurface,
        foregroundColor: AppColors.darkFg1,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        backgroundColor: AppColors.darkBgElev,
        selectedItemColor: AppColors.darkFg1,
        unselectedItemColor: AppColors.darkFg3,
      ),
    );
  }

  static ThemeData light() {
    return ThemeData(
      brightness: Brightness.light,
      scaffoldBackgroundColor: AppColors.lightBg,
      colorScheme: const ColorScheme.light(
        background: AppColors.lightBg,
        surface:    AppColors.lightSurface,
        primary:    AppColors.accent1,
        secondary:  AppColors.accent2,
        error:      AppColors.loss,
        onBackground: AppColors.lightFg1,
        onSurface:    AppColors.lightFg1,
        onPrimary:    Colors.white,
      ),
      cardColor: AppColors.lightSurface,
      dividerColor: AppColors.lightBorder,
      textTheme: _textTheme(AppColors.lightFg1, AppColors.lightFg2, AppColors.lightFg3),
      appBarTheme: const AppBarTheme(
        backgroundColor: AppColors.lightSurface,
        foregroundColor: AppColors.lightFg1,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        backgroundColor: AppColors.lightBgElev,
        selectedItemColor: AppColors.lightFg1,
        unselectedItemColor: AppColors.lightFg3,
      ),
    );
  }

  static TextTheme _textTheme(Color fg1, Color fg2, Color fg3) {
    final base = GoogleFonts.dmSansTextTheme();
    return base.copyWith(
      headlineLarge:  GoogleFonts.dmSerifDisplay(fontSize: AppFontSize.xl3, fontWeight: FontWeight.w700, color: fg1, letterSpacing: -0.03 * AppFontSize.xl3, height: 1.15),
      headlineMedium: GoogleFonts.dmSerifDisplay(fontSize: AppFontSize.xl2, fontWeight: FontWeight.w400, color: fg1, letterSpacing: -0.02 * AppFontSize.xl2, height: 1.2),
      headlineSmall:  GoogleFonts.dmSerifDisplay(fontSize: AppFontSize.xl,  fontWeight: FontWeight.w400, color: fg1, height: 1.25),
      titleLarge:     GoogleFonts.dmSans(fontSize: AppFontSize.md,  fontWeight: FontWeight.w600, color: fg1),
      titleMedium:    GoogleFonts.dmSans(fontSize: AppFontSize.base, fontWeight: FontWeight.w600, color: fg1),
      titleSmall:     GoogleFonts.dmSans(fontSize: AppFontSize.sm,  fontWeight: FontWeight.w600, color: fg1),
      bodyLarge:      GoogleFonts.dmSans(fontSize: AppFontSize.base, fontWeight: FontWeight.w400, color: fg1, height: 1.55),
      bodyMedium:     GoogleFonts.dmSans(fontSize: AppFontSize.sm,  fontWeight: FontWeight.w400, color: fg2, height: 1.55),
      bodySmall:      GoogleFonts.dmSans(fontSize: AppFontSize.xs,  fontWeight: FontWeight.w400, color: fg3, height: 1.4),
      labelLarge:     GoogleFonts.jetBrainsMono(fontSize: AppFontSize.sm,  fontWeight: FontWeight.w500, color: fg1, letterSpacing: 0.08 * AppFontSize.sm),
      labelSmall:     GoogleFonts.jetBrainsMono(fontSize: AppFontSize.xs,  fontWeight: FontWeight.w500, color: fg3, letterSpacing: 0.14 * AppFontSize.xs),
    );
  }

  // Convenience getters for use in widgets
  static TextStyle mono(double size, Color color, {FontWeight weight = FontWeight.w500}) =>
      GoogleFonts.jetBrainsMono(fontSize: size, color: color, fontWeight: weight);

  static TextStyle serif(double size, Color color, {FontWeight weight = FontWeight.w400}) =>
      GoogleFonts.dmSerifDisplay(fontSize: size, color: color, fontWeight: weight);

  static TextStyle tamil(double size, Color color, {FontWeight weight = FontWeight.w400}) =>
      GoogleFonts.notoSansTamil(fontSize: size, color: color, fontWeight: weight);
}
