import 'package:flutter_test/flutter_test.dart';
import 'package:tradezen_flutter/main.dart';

void main() {
  testWidgets('App launches smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const TradeZenApp(initialTheme: 'dark'));
    expect(find.byType(TradeZenApp), findsOneWidget);
  });
}
