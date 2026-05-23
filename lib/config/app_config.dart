class AppConfig {
  static const String baseUrl = 'https://tradeze.in';

  // Polling intervals
  static const Duration liveRefresh    = Duration(seconds: 5);
  static const Duration reportRefresh  = Duration(seconds: 30);

  // Market session (IST = UTC+5:30)
  static const int marketOpenHour   = 9;
  static const int marketOpenMinute = 15;
  static const int marketCloseHour  = 15;
  static const int marketCloseMinute = 30;

  // King Fisher session window
  static const int kfCloseHour   = 13;
  static const int kfCloseMinute = 0;

  // Nifty lot size — verify after SEBI revisions
  static const int niftyLotSize = 75;
}
