package gw.spec.core.expressions.arithmetic.addition
uses java.lang.Byte
uses java.lang.Character
uses java.lang.Integer
uses java.lang.Short
uses java.lang.Long
uses java.lang.Float
uses java.lang.Double
uses java.math.BigInteger
uses java.math.BigDecimal
uses gw.spec.core.expressions.arithmetic.ArithmeticTestBase

class Addition_ShortTest extends ArithmeticTestBase {

  function testShortPByteAddition() {
    assertEquals(b_int(0), b_short(0) !+ p_byte(0))
    assertEquals(b_int(23), b_short(0) !+ p_byte(23))
    assertEquals(b_int(-32), b_short(0) !+ p_byte(-32))
    assertEquals(b_int(127), b_short(0) !+ p_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-128), b_short(0) !+ p_byte(Byte.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ p_byte(0))
    assertEquals(b_int(46), b_short(23) !+ p_byte(23))
    assertEquals(b_int(-9), b_short(23) !+ p_byte(-32))
    assertEquals(b_int(150), b_short(23) !+ p_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-105), b_short(23) !+ p_byte(Byte.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ p_byte(0))
    assertEquals(b_int(-9), b_short(-32) !+ p_byte(23))
    assertEquals(b_int(-64), b_short(-32) !+ p_byte(-32))
    assertEquals(b_int(95), b_short(-32) !+ p_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-160), b_short(-32) !+ p_byte(Byte.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ p_byte(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ p_byte(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ p_byte(-32))
    assertEquals(b_int(32894), b_short(Short.MAX_VALUE) !+ p_byte(Byte.MAX_VALUE))
    assertEquals(b_int(32639), b_short(Short.MAX_VALUE) !+ p_byte(Byte.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ p_byte(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ p_byte(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ p_byte(-32))
    assertEquals(b_int(-32641), b_short(Short.MIN_VALUE) !+ p_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-32896), b_short(Short.MIN_VALUE) !+ p_byte(Byte.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ p_byte(0)))
  }

  function testShortByteAddition() {
    assertEquals(b_int(0), b_short(0) !+ b_byte(0))
    assertEquals(b_int(23), b_short(0) !+ b_byte(23))
    assertEquals(b_int(-32), b_short(0) !+ b_byte(-32))
    assertEquals(b_int(127), b_short(0) !+ b_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-128), b_short(0) !+ b_byte(Byte.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ b_byte(0))
    assertEquals(b_int(46), b_short(23) !+ b_byte(23))
    assertEquals(b_int(-9), b_short(23) !+ b_byte(-32))
    assertEquals(b_int(150), b_short(23) !+ b_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-105), b_short(23) !+ b_byte(Byte.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ b_byte(0))
    assertEquals(b_int(-9), b_short(-32) !+ b_byte(23))
    assertEquals(b_int(-64), b_short(-32) !+ b_byte(-32))
    assertEquals(b_int(95), b_short(-32) !+ b_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-160), b_short(-32) !+ b_byte(Byte.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ b_byte(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ b_byte(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ b_byte(-32))
    assertEquals(b_int(32894), b_short(Short.MAX_VALUE) !+ b_byte(Byte.MAX_VALUE))
    assertEquals(b_int(32639), b_short(Short.MAX_VALUE) !+ b_byte(Byte.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ b_byte(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ b_byte(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ b_byte(-32))
    assertEquals(b_int(-32641), b_short(Short.MIN_VALUE) !+ b_byte(Byte.MAX_VALUE))
    assertEquals(b_int(-32896), b_short(Short.MIN_VALUE) !+ b_byte(Byte.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ b_byte(0)))
  }

  function testShortPShortAddition() {
    assertEquals(b_int(0), b_short(0) !+ p_short(0))
    assertEquals(b_int(23), b_short(0) !+ p_short(23))
    assertEquals(b_int(-32), b_short(0) !+ p_short(-32))
    assertEquals(b_int(32767), b_short(0) !+ p_short(Short.MAX_VALUE))
    assertEquals(b_int(-32768), b_short(0) !+ p_short(Short.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ p_short(0))
    assertEquals(b_int(46), b_short(23) !+ p_short(23))
    assertEquals(b_int(-9), b_short(23) !+ p_short(-32))
    assertEquals(b_int(32790), b_short(23) !+ p_short(Short.MAX_VALUE))
    assertEquals(b_int(-32745), b_short(23) !+ p_short(Short.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ p_short(0))
    assertEquals(b_int(-9), b_short(-32) !+ p_short(23))
    assertEquals(b_int(-64), b_short(-32) !+ p_short(-32))
    assertEquals(b_int(32735), b_short(-32) !+ p_short(Short.MAX_VALUE))
    assertEquals(b_int(-32800), b_short(-32) !+ p_short(Short.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ p_short(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ p_short(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ p_short(-32))
    assertEquals(b_int(65534), b_short(Short.MAX_VALUE) !+ p_short(Short.MAX_VALUE))
    assertEquals(b_int(-1), b_short(Short.MAX_VALUE) !+ p_short(Short.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ p_short(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ p_short(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ p_short(-32))
    assertEquals(b_int(-1), b_short(Short.MIN_VALUE) !+ p_short(Short.MAX_VALUE))
    assertEquals(b_int(-65536), b_short(Short.MIN_VALUE) !+ p_short(Short.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ p_short(0)))
  }

  function testShortShortAddition() {
    assertEquals(b_int(0), b_short(0) !+ b_short(0))
    assertEquals(b_int(23), b_short(0) !+ b_short(23))
    assertEquals(b_int(-32), b_short(0) !+ b_short(-32))
    assertEquals(b_int(32767), b_short(0) !+ b_short(Short.MAX_VALUE))
    assertEquals(b_int(-32768), b_short(0) !+ b_short(Short.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ b_short(0))
    assertEquals(b_int(46), b_short(23) !+ b_short(23))
    assertEquals(b_int(-9), b_short(23) !+ b_short(-32))
    assertEquals(b_int(32790), b_short(23) !+ b_short(Short.MAX_VALUE))
    assertEquals(b_int(-32745), b_short(23) !+ b_short(Short.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ b_short(0))
    assertEquals(b_int(-9), b_short(-32) !+ b_short(23))
    assertEquals(b_int(-64), b_short(-32) !+ b_short(-32))
    assertEquals(b_int(32735), b_short(-32) !+ b_short(Short.MAX_VALUE))
    assertEquals(b_int(-32800), b_short(-32) !+ b_short(Short.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ b_short(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ b_short(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ b_short(-32))
    assertEquals(b_int(65534), b_short(Short.MAX_VALUE) !+ b_short(Short.MAX_VALUE))
    assertEquals(b_int(-1), b_short(Short.MAX_VALUE) !+ b_short(Short.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ b_short(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ b_short(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ b_short(-32))
    assertEquals(b_int(-1), b_short(Short.MIN_VALUE) !+ b_short(Short.MAX_VALUE))
    assertEquals(b_int(-65536), b_short(Short.MIN_VALUE) !+ b_short(Short.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ b_short(0)))
  }

  function testShortPCharAddition() {
    assertEquals(b_int(0), b_short(0) !+ p_char(0))
    assertEquals(b_int(23), b_short(0) !+ p_char(23))
    assertEquals(b_int(65535), b_short(0) !+ p_char(Character.MAX_VALUE))

    assertEquals(b_int(23), b_short(23) !+ p_char(0))
    assertEquals(b_int(46), b_short(23) !+ p_char(23))
    assertEquals(b_int(65558), b_short(23) !+ p_char(Character.MAX_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ p_char(0))
    assertEquals(b_int(-9), b_short(-32) !+ p_char(23))
    assertEquals(b_int(65503), b_short(-32) !+ p_char(Character.MAX_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ p_char(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ p_char(23))
    assertEquals(b_int(98302), b_short(Short.MAX_VALUE) !+ p_char(Character.MAX_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ p_char(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ p_char(23))
    assertEquals(b_int(32767), b_short(Short.MIN_VALUE) !+ p_char(Character.MAX_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ p_char(0)))
  }

  function testShortCharacterAddition() {
    assertEquals(b_int(0), b_short(0) !+ b_char(0))
    assertEquals(b_int(23), b_short(0) !+ b_char(23))
    assertEquals(b_int(65535), b_short(0) !+ b_char(Character.MAX_VALUE))

    assertEquals(b_int(23), b_short(23) !+ b_char(0))
    assertEquals(b_int(46), b_short(23) !+ b_char(23))
    assertEquals(b_int(65558), b_short(23) !+ b_char(Character.MAX_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ b_char(0))
    assertEquals(b_int(-9), b_short(-32) !+ b_char(23))
    assertEquals(b_int(65503), b_short(-32) !+ b_char(Character.MAX_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ b_char(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ b_char(23))
    assertEquals(b_int(98302), b_short(Short.MAX_VALUE) !+ b_char(Character.MAX_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ b_char(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ b_char(23))
    assertEquals(b_int(32767), b_short(Short.MIN_VALUE) !+ b_char(Character.MAX_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ b_char(0)))
  }

  function testShortPIntAddition() {
    assertEquals(b_int(0), b_short(0) !+ p_int(0))
    assertEquals(b_int(23), b_short(0) !+ p_int(23))
    assertEquals(b_int(-32), b_short(0) !+ p_int(-32))
    assertEquals(b_int(2147483647), b_short(0) !+ p_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147483648), b_short(0) !+ p_int(Integer.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ p_int(0))
    assertEquals(b_int(46), b_short(23) !+ p_int(23))
    assertEquals(b_int(-9), b_short(23) !+ p_int(-32))
    assertEquals(b_int(-2147483626), b_short(23) !+ p_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147483625), b_short(23) !+ p_int(Integer.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ p_int(0))
    assertEquals(b_int(-9), b_short(-32) !+ p_int(23))
    assertEquals(b_int(-64), b_short(-32) !+ p_int(-32))
    assertEquals(b_int(2147483615), b_short(-32) !+ p_int(Integer.MAX_VALUE))
    assertEquals(b_int(2147483616), b_short(-32) !+ p_int(Integer.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ p_int(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ p_int(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ p_int(-32))
    assertEquals(b_int(-2147450882), b_short(Short.MAX_VALUE) !+ p_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147450881), b_short(Short.MAX_VALUE) !+ p_int(Integer.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ p_int(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ p_int(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ p_int(-32))
    assertEquals(b_int(2147450879), b_short(Short.MIN_VALUE) !+ p_int(Integer.MAX_VALUE))
    assertEquals(b_int(2147450880), b_short(Short.MIN_VALUE) !+ p_int(Integer.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ p_int(0)))
  }

  function testShortIntegerAddition() {
    assertEquals(b_int(0), b_short(0) !+ b_int(0))
    assertEquals(b_int(23), b_short(0) !+ b_int(23))
    assertEquals(b_int(-32), b_short(0) !+ b_int(-32))
    assertEquals(b_int(2147483647), b_short(0) !+ b_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147483648), b_short(0) !+ b_int(Integer.MIN_VALUE))

    assertEquals(b_int(23), b_short(23) !+ b_int(0))
    assertEquals(b_int(46), b_short(23) !+ b_int(23))
    assertEquals(b_int(-9), b_short(23) !+ b_int(-32))
    assertEquals(b_int(-2147483626), b_short(23) !+ b_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147483625), b_short(23) !+ b_int(Integer.MIN_VALUE))

    assertEquals(b_int(-32), b_short(-32) !+ b_int(0))
    assertEquals(b_int(-9), b_short(-32) !+ b_int(23))
    assertEquals(b_int(-64), b_short(-32) !+ b_int(-32))
    assertEquals(b_int(2147483615), b_short(-32) !+ b_int(Integer.MAX_VALUE))
    assertEquals(b_int(2147483616), b_short(-32) !+ b_int(Integer.MIN_VALUE))

    assertEquals(b_int(32767), b_short(Short.MAX_VALUE) !+ b_int(0))
    assertEquals(b_int(32790), b_short(Short.MAX_VALUE) !+ b_int(23))
    assertEquals(b_int(32735), b_short(Short.MAX_VALUE) !+ b_int(-32))
    assertEquals(b_int(-2147450882), b_short(Short.MAX_VALUE) !+ b_int(Integer.MAX_VALUE))
    assertEquals(b_int(-2147450881), b_short(Short.MAX_VALUE) !+ b_int(Integer.MIN_VALUE))

    assertEquals(b_int(-32768), b_short(Short.MIN_VALUE) !+ b_int(0))
    assertEquals(b_int(-32745), b_short(Short.MIN_VALUE) !+ b_int(23))
    assertEquals(b_int(-32800), b_short(Short.MIN_VALUE) !+ b_int(-32))
    assertEquals(b_int(2147450879), b_short(Short.MIN_VALUE) !+ b_int(Integer.MAX_VALUE))
    assertEquals(b_int(2147450880), b_short(Short.MIN_VALUE) !+ b_int(Integer.MIN_VALUE))

    assertEquals(Integer, statictypeof(b_short(0) !+ b_int(0)))
  }

  function testShortPLongAddition() {
    assertEquals(b_long(0), b_short(0) !+ p_long(0))
    assertEquals(b_long(23), b_short(0) !+ p_long(23))
    assertEquals(b_long(-32), b_short(0) !+ p_long(-32))
    assertEquals(b_long(9223372036854775807), b_short(0) !+ p_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854775808), b_short(0) !+ p_long(Long.MIN_VALUE))

    assertEquals(b_long(23), b_short(23) !+ p_long(0))
    assertEquals(b_long(46), b_short(23) !+ p_long(23))
    assertEquals(b_long(-9), b_short(23) !+ p_long(-32))
    assertEquals(b_long(-9223372036854775786), b_short(23) !+ p_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854775785), b_short(23) !+ p_long(Long.MIN_VALUE))

    assertEquals(b_long(-32), b_short(-32) !+ p_long(0))
    assertEquals(b_long(-9), b_short(-32) !+ p_long(23))
    assertEquals(b_long(-64), b_short(-32) !+ p_long(-32))
    assertEquals(b_long(9223372036854775775), b_short(-32) !+ p_long(Long.MAX_VALUE))
    assertEquals(b_long(9223372036854775776), b_short(-32) !+ p_long(Long.MIN_VALUE))

    assertEquals(b_long(32767), b_short(Short.MAX_VALUE) !+ p_long(0))
    assertEquals(b_long(32790), b_short(Short.MAX_VALUE) !+ p_long(23))
    assertEquals(b_long(32735), b_short(Short.MAX_VALUE) !+ p_long(-32))
    assertEquals(b_long(-9223372036854743042), b_short(Short.MAX_VALUE) !+ p_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854743041), b_short(Short.MAX_VALUE) !+ p_long(Long.MIN_VALUE))

    assertEquals(b_long(-32768), b_short(Short.MIN_VALUE) !+ p_long(0))
    assertEquals(b_long(-32745), b_short(Short.MIN_VALUE) !+ p_long(23))
    assertEquals(b_long(-32800), b_short(Short.MIN_VALUE) !+ p_long(-32))
    assertEquals(b_long(9223372036854743039), b_short(Short.MIN_VALUE) !+ p_long(Long.MAX_VALUE))
    assertEquals(b_long(9223372036854743040), b_short(Short.MIN_VALUE) !+ p_long(Long.MIN_VALUE))

    assertEquals(Long, statictypeof(b_short(0) !+ p_long(0)))
  }

  function testShortLongAddition() {
    assertEquals(b_long(0), b_short(0) !+ b_long(0))
    assertEquals(b_long(23), b_short(0) !+ b_long(23))
    assertEquals(b_long(-32), b_short(0) !+ b_long(-32))
    assertEquals(b_long(9223372036854775807), b_short(0) !+ b_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854775808), b_short(0) !+ b_long(Long.MIN_VALUE))

    assertEquals(b_long(23), b_short(23) !+ b_long(0))
    assertEquals(b_long(46), b_short(23) !+ b_long(23))
    assertEquals(b_long(-9), b_short(23) !+ b_long(-32))
    assertEquals(b_long(-9223372036854775786), b_short(23) !+ b_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854775785), b_short(23) !+ b_long(Long.MIN_VALUE))

    assertEquals(b_long(-32), b_short(-32) !+ b_long(0))
    assertEquals(b_long(-9), b_short(-32) !+ b_long(23))
    assertEquals(b_long(-64), b_short(-32) !+ b_long(-32))
    assertEquals(b_long(9223372036854775775), b_short(-32) !+ b_long(Long.MAX_VALUE))
    assertEquals(b_long(9223372036854775776), b_short(-32) !+ b_long(Long.MIN_VALUE))

    assertEquals(b_long(32767), b_short(Short.MAX_VALUE) !+ b_long(0))
    assertEquals(b_long(32790), b_short(Short.MAX_VALUE) !+ b_long(23))
    assertEquals(b_long(32735), b_short(Short.MAX_VALUE) !+ b_long(-32))
    assertEquals(b_long(-9223372036854743042), b_short(Short.MAX_VALUE) !+ b_long(Long.MAX_VALUE))
    assertEquals(b_long(-9223372036854743041), b_short(Short.MAX_VALUE) !+ b_long(Long.MIN_VALUE))

    assertEquals(b_long(-32768), b_short(Short.MIN_VALUE) !+ b_long(0))
    assertEquals(b_long(-32745), b_short(Short.MIN_VALUE) !+ b_long(23))
    assertEquals(b_long(-32800), b_short(Short.MIN_VALUE) !+ b_long(-32))
    assertEquals(b_long(9223372036854743039), b_short(Short.MIN_VALUE) !+ b_long(Long.MAX_VALUE))
    assertEquals(b_long(9223372036854743040), b_short(Short.MIN_VALUE) !+ b_long(Long.MIN_VALUE))

    assertEquals(Long, statictypeof(b_short(0) !+ b_long(0)))
  }

  function testShortPFloatAddition() {
    assertEquals(b_float(0.0), b_short(0) + p_float(0.0))
    assertEquals(b_float(23.0), b_short(0) + p_float(23.0))
    assertEquals(b_float(23.123), b_short(0) + p_float(23.123))
    assertEquals(b_float(-32.0), b_short(0) + p_float(-32.0))
    assertEquals(b_float(-32.456), b_short(0) + p_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(0) + p_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(0) + p_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(0) + p_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(0) + p_float(Float.MAX_VALUE))
    assertEquals(b_float(Float.parseFloat("1.4E-45")), b_short(0) + p_float(Float.MIN_VALUE))

    assertEquals(b_float(23.0), b_short(23) + p_float(0.0))
    assertEquals(b_float(46.0), b_short(23) + p_float(23.0))
    assertEquals(b_float(46.123), b_short(23) + p_float(23.123))
    assertEquals(b_float(-9.0), b_short(23) + p_float(-32.0))
    assertEquals(b_float(-9.456001), b_short(23) + p_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(23) + p_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(23) + p_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(23) + p_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(23) + p_float(Float.MAX_VALUE))
    assertEquals(b_float(23.0), b_short(23) + p_float(Float.MIN_VALUE))

    assertEquals(b_float(-32.0), b_short(-32) + p_float(0.0))
    assertEquals(b_float(-9.0), b_short(-32) + p_float(23.0))
    assertEquals(b_float(-8.877001), b_short(-32) + p_float(23.123))
    assertEquals(b_float(-64.0), b_short(-32) + p_float(-32.0))
    assertEquals(b_float(-64.456), b_short(-32) + p_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(-32) + p_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(-32) + p_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(-32) + p_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(-32) + p_float(Float.MAX_VALUE))
    assertEquals(b_float(-32.0), b_short(-32) + p_float(Float.MIN_VALUE))

    assertEquals(b_float(32767.0), b_short(Short.MAX_VALUE) + p_float(0.0))
    assertEquals(b_float(32790.0), b_short(Short.MAX_VALUE) + p_float(23.0))
    assertEquals(b_float(32790.12), b_short(Short.MAX_VALUE) + p_float(23.123))
    assertEquals(b_float(32735.0), b_short(Short.MAX_VALUE) + p_float(-32.0))
    assertEquals(b_float(32734.545), b_short(Short.MAX_VALUE) + p_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(Short.MAX_VALUE) + p_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(Short.MAX_VALUE) + p_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(Short.MAX_VALUE) + p_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(Short.MAX_VALUE) + p_float(Float.MAX_VALUE))
    assertEquals(b_float(32767.0), b_short(Short.MAX_VALUE) + p_float(Float.MIN_VALUE))

    assertEquals(b_float(-32768.0), b_short(Short.MIN_VALUE) + p_float(0.0))
    assertEquals(b_float(-32745.0), b_short(Short.MIN_VALUE) + p_float(23.0))
    assertEquals(b_float(-32744.877), b_short(Short.MIN_VALUE) + p_float(23.123))
    assertEquals(b_float(-32800.0), b_short(Short.MIN_VALUE) + p_float(-32.0))
    assertEquals(b_float(-32800.457), b_short(Short.MIN_VALUE) + p_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(Short.MIN_VALUE) + p_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(Short.MIN_VALUE) + p_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(Short.MIN_VALUE) + p_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(Short.MIN_VALUE) + p_float(Float.MAX_VALUE))
    assertEquals(b_float(-32768.0), b_short(Short.MIN_VALUE) + p_float(Float.MIN_VALUE))

    assertEquals(Float, statictypeof(b_short(0) + p_float(0.0)))
  }

  function testShortFloatAddition() {
    assertEquals(b_float(0.0), b_short(0) + b_float(0.0))
    assertEquals(b_float(23.0), b_short(0) + b_float(23.0))
    assertEquals(b_float(23.123), b_short(0) + b_float(23.123))
    assertEquals(b_float(-32.0), b_short(0) + b_float(-32.0))
    assertEquals(b_float(-32.456), b_short(0) + b_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(0) + b_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(0) + b_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(0) + b_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(0) + b_float(Float.MAX_VALUE))
    assertEquals(b_float(Float.parseFloat("1.4E-45")), b_short(0) + b_float(Float.MIN_VALUE))

    assertEquals(b_float(23.0), b_short(23) + b_float(0.0))
    assertEquals(b_float(46.0), b_short(23) + b_float(23.0))
    assertEquals(b_float(46.123), b_short(23) + b_float(23.123))
    assertEquals(b_float(-9.0), b_short(23) + b_float(-32.0))
    assertEquals(b_float(-9.456001), b_short(23) + b_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(23) + b_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(23) + b_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(23) + b_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(23) + b_float(Float.MAX_VALUE))
    assertEquals(b_float(23.0), b_short(23) + b_float(Float.MIN_VALUE))

    assertEquals(b_float(-32.0), b_short(-32) + b_float(0.0))
    assertEquals(b_float(-9.0), b_short(-32) + b_float(23.0))
    assertEquals(b_float(-8.877001), b_short(-32) + b_float(23.123))
    assertEquals(b_float(-64.0), b_short(-32) + b_float(-32.0))
    assertEquals(b_float(-64.456), b_short(-32) + b_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(-32) + b_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(-32) + b_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(-32) + b_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(-32) + b_float(Float.MAX_VALUE))
    assertEquals(b_float(-32.0), b_short(-32) + b_float(Float.MIN_VALUE))

    assertEquals(b_float(32767.0), b_short(Short.MAX_VALUE) + b_float(0.0))
    assertEquals(b_float(32790.0), b_short(Short.MAX_VALUE) + b_float(23.0))
    assertEquals(b_float(32790.12), b_short(Short.MAX_VALUE) + b_float(23.123))
    assertEquals(b_float(32735.0), b_short(Short.MAX_VALUE) + b_float(-32.0))
    assertEquals(b_float(32734.545), b_short(Short.MAX_VALUE) + b_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(Short.MAX_VALUE) + b_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(Short.MAX_VALUE) + b_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(Short.MAX_VALUE) + b_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(Short.MAX_VALUE) + b_float(Float.MAX_VALUE))
    assertEquals(b_float(32767.0), b_short(Short.MAX_VALUE) + b_float(Float.MIN_VALUE))

    assertEquals(b_float(-32768.0), b_short(Short.MIN_VALUE) + b_float(0.0))
    assertEquals(b_float(-32745.0), b_short(Short.MIN_VALUE) + b_float(23.0))
    assertEquals(b_float(-32744.877), b_short(Short.MIN_VALUE) + b_float(23.123))
    assertEquals(b_float(-32800.0), b_short(Short.MIN_VALUE) + b_float(-32.0))
    assertEquals(b_float(-32800.457), b_short(Short.MIN_VALUE) + b_float(-32.456))
    assertEquals(b_float(Float.POSITIVE_INFINITY), b_short(Short.MIN_VALUE) + b_float(Float.POSITIVE_INFINITY))
    assertEquals(b_float(Float.NEGATIVE_INFINITY), b_short(Short.MIN_VALUE) + b_float(Float.NEGATIVE_INFINITY))
    assertEquals(b_float(Float.NaN_), b_short(Short.MIN_VALUE) + b_float(Float.NaN_))
    assertEquals(b_float(Float.parseFloat("3.4028235E38")), b_short(Short.MIN_VALUE) + b_float(Float.MAX_VALUE))
    assertEquals(b_float(-32768.0), b_short(Short.MIN_VALUE) + b_float(Float.MIN_VALUE))

    assertEquals(Float, statictypeof(b_short(0) + b_float(0.0)))
  }

  function testShortPDoubleAddition() {
    assertEquals(b_double(0.0), b_short(0) + p_double(0.0))
    assertEquals(b_double(23.0), b_short(0) + p_double(23.0))
    assertEquals(b_double(23.123), b_short(0) + p_double(23.123))
    assertEquals(b_double(-32.0), b_short(0) + p_double(-32.0))
    assertEquals(b_double(-32.456), b_short(0) + p_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(0) + p_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(0) + p_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(0) + p_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(0) + p_double(Double.MAX_VALUE))
    assertEquals(b_double(Double.MIN_VALUE), b_short(0) + p_double(Double.MIN_VALUE))

    assertEquals(b_double(23.0), b_short(23) + p_double(0.0))
    assertEquals(b_double(46.0), b_short(23) + p_double(23.0))
    assertEquals(b_double(46.123000000000005), b_short(23) + p_double(23.123))
    assertEquals(b_double(-9.0), b_short(23) + p_double(-32.0))
    assertEquals(b_double(-9.456000000000003), b_short(23) + p_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(23) + p_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(23) + p_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(23) + p_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(23) + p_double(Double.MAX_VALUE))
    assertEquals(b_double(23.0), b_short(23) + p_double(Double.MIN_VALUE))

    assertEquals(b_double(-32.0), b_short(-32) + p_double(0.0))
    assertEquals(b_double(-9.0), b_short(-32) + p_double(23.0))
    assertEquals(b_double(-8.876999999999999), b_short(-32) + p_double(23.123))
    assertEquals(b_double(-64.0), b_short(-32) + p_double(-32.0))
    assertEquals(b_double(-64.456), b_short(-32) + p_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(-32) + p_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(-32) + p_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(-32) + p_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(-32) + p_double(Double.MAX_VALUE))
    assertEquals(b_double(-32.0), b_short(-32) + p_double(Double.MIN_VALUE))

    assertEquals(b_double(32767.0), b_short(Short.MAX_VALUE) + p_double(0.0))
    assertEquals(b_double(32790.0), b_short(Short.MAX_VALUE) + p_double(23.0))
    assertEquals(b_double(32790.123), b_short(Short.MAX_VALUE) + p_double(23.123))
    assertEquals(b_double(32735.0), b_short(Short.MAX_VALUE) + p_double(-32.0))
    assertEquals(b_double(32734.544), b_short(Short.MAX_VALUE) + p_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(Short.MAX_VALUE) + p_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(Short.MAX_VALUE) + p_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(Short.MAX_VALUE) + p_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(Short.MAX_VALUE) + p_double(Double.MAX_VALUE))
    assertEquals(b_double(32767.0), b_short(Short.MAX_VALUE) + p_double(Double.MIN_VALUE))

    assertEquals(b_double(-32768.0), b_short(Short.MIN_VALUE) + p_double(0.0))
    assertEquals(b_double(-32745.0), b_short(Short.MIN_VALUE) + p_double(23.0))
    assertEquals(b_double(-32744.877), b_short(Short.MIN_VALUE) + p_double(23.123))
    assertEquals(b_double(-32800.0), b_short(Short.MIN_VALUE) + p_double(-32.0))
    assertEquals(b_double(-32800.456), b_short(Short.MIN_VALUE) + p_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(Short.MIN_VALUE) + p_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(Short.MIN_VALUE) + p_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(Short.MIN_VALUE) + p_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(Short.MIN_VALUE) + p_double(Double.MAX_VALUE))
    assertEquals(b_double(-32768.0), b_short(Short.MIN_VALUE) + p_double(Double.MIN_VALUE))

    assertEquals(Double, statictypeof(b_short(0) + p_double(0.0)))
  }

  function testShortDoubleAddition() {
    assertEquals(b_double(0.0), b_short(0) + b_double(0.0))
    assertEquals(b_double(23.0), b_short(0) + b_double(23.0))
    assertEquals(b_double(23.123), b_short(0) + b_double(23.123))
    assertEquals(b_double(-32.0), b_short(0) + b_double(-32.0))
    assertEquals(b_double(-32.456), b_short(0) + b_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(0) + b_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(0) + b_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(0) + b_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(0) + b_double(Double.MAX_VALUE))
    assertEquals(b_double(Double.MIN_VALUE), b_short(0) + b_double(Double.MIN_VALUE))

    assertEquals(b_double(23.0), b_short(23) + b_double(0.0))
    assertEquals(b_double(46.0), b_short(23) + b_double(23.0))
    assertEquals(b_double(46.123000000000005), b_short(23) + b_double(23.123))
    assertEquals(b_double(-9.0), b_short(23) + b_double(-32.0))
    assertEquals(b_double(-9.456000000000003), b_short(23) + b_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(23) + b_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(23) + b_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(23) + b_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(23) + b_double(Double.MAX_VALUE))
    assertEquals(b_double(23.0), b_short(23) + b_double(Double.MIN_VALUE))

    assertEquals(b_double(-32.0), b_short(-32) + b_double(0.0))
    assertEquals(b_double(-9.0), b_short(-32) + b_double(23.0))
    assertEquals(b_double(-8.876999999999999), b_short(-32) + b_double(23.123))
    assertEquals(b_double(-64.0), b_short(-32) + b_double(-32.0))
    assertEquals(b_double(-64.456), b_short(-32) + b_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(-32) + b_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(-32) + b_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(-32) + b_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(-32) + b_double(Double.MAX_VALUE))
    assertEquals(b_double(-32.0), b_short(-32) + b_double(Double.MIN_VALUE))

    assertEquals(b_double(32767.0), b_short(Short.MAX_VALUE) + b_double(0.0))
    assertEquals(b_double(32790.0), b_short(Short.MAX_VALUE) + b_double(23.0))
    assertEquals(b_double(32790.123), b_short(Short.MAX_VALUE) + b_double(23.123))
    assertEquals(b_double(32735.0), b_short(Short.MAX_VALUE) + b_double(-32.0))
    assertEquals(b_double(32734.544), b_short(Short.MAX_VALUE) + b_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(Short.MAX_VALUE) + b_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(Short.MAX_VALUE) + b_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(Short.MAX_VALUE) + b_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(Short.MAX_VALUE) + b_double(Double.MAX_VALUE))
    assertEquals(b_double(32767.0), b_short(Short.MAX_VALUE) + b_double(Double.MIN_VALUE))

    assertEquals(b_double(-32768.0), b_short(Short.MIN_VALUE) + b_double(0.0))
    assertEquals(b_double(-32745.0), b_short(Short.MIN_VALUE) + b_double(23.0))
    assertEquals(b_double(-32744.877), b_short(Short.MIN_VALUE) + b_double(23.123))
    assertEquals(b_double(-32800.0), b_short(Short.MIN_VALUE) + b_double(-32.0))
    assertEquals(b_double(-32800.456), b_short(Short.MIN_VALUE) + b_double(-32.456))
    assertEquals(b_double(Double.POSITIVE_INFINITY), b_short(Short.MIN_VALUE) + b_double(Double.POSITIVE_INFINITY))
    assertEquals(b_double(Double.NEGATIVE_INFINITY), b_short(Short.MIN_VALUE) + b_double(Double.NEGATIVE_INFINITY))
    assertEquals(b_double(Double.NaN_), b_short(Short.MIN_VALUE) + b_double(Double.NaN_))
    assertEquals(b_double(Double.MAX_VALUE), b_short(Short.MIN_VALUE) + b_double(Double.MAX_VALUE))
    assertEquals(b_double(-32768.0), b_short(Short.MIN_VALUE) + b_double(Double.MIN_VALUE))

    assertEquals(Double, statictypeof(b_short(0) + b_double(0.0)))
  }

  function testShortBigIntegerAddition() {
    assertEquals(big_int("0"), b_short(0) + big_int("0"))
    assertEquals(big_int("23"), b_short(0) + big_int("23"))
    assertEquals(big_int("-32"), b_short(0) + big_int("-32"))
    assertEquals(big_int("123456789012345678901234567890"), b_short(0) + big_int("123456789012345678901234567890"))
    assertEquals(big_int("-123456789012345678901234567890"), b_short(0) + big_int("-123456789012345678901234567890"))

    assertEquals(big_int("23"), b_short(23) + big_int("0"))
    assertEquals(big_int("46"), b_short(23) + big_int("23"))
    assertEquals(big_int("-9"), b_short(23) + big_int("-32"))
    assertEquals(big_int("123456789012345678901234567913"), b_short(23) + big_int("123456789012345678901234567890"))
    assertEquals(big_int("-123456789012345678901234567867"), b_short(23) + big_int("-123456789012345678901234567890"))

    assertEquals(big_int("-32"), b_short(-32) + big_int("0"))
    assertEquals(big_int("-9"), b_short(-32) + big_int("23"))
    assertEquals(big_int("-64"), b_short(-32) + big_int("-32"))
    assertEquals(big_int("123456789012345678901234567858"), b_short(-32) + big_int("123456789012345678901234567890"))
    assertEquals(big_int("-123456789012345678901234567922"), b_short(-32) + big_int("-123456789012345678901234567890"))

    assertEquals(big_int("32767"), b_short(Short.MAX_VALUE) + big_int("0"))
    assertEquals(big_int("32790"), b_short(Short.MAX_VALUE) + big_int("23"))
    assertEquals(big_int("32735"), b_short(Short.MAX_VALUE) + big_int("-32"))
    assertEquals(big_int("123456789012345678901234600657"), b_short(Short.MAX_VALUE) + big_int("123456789012345678901234567890"))
    assertEquals(big_int("-123456789012345678901234535123"), b_short(Short.MAX_VALUE) + big_int("-123456789012345678901234567890"))

    assertEquals(big_int("-32768"), b_short(Short.MIN_VALUE) + big_int("0"))
    assertEquals(big_int("-32745"), b_short(Short.MIN_VALUE) + big_int("23"))
    assertEquals(big_int("-32800"), b_short(Short.MIN_VALUE) + big_int("-32"))
    assertEquals(big_int("123456789012345678901234535122"), b_short(Short.MIN_VALUE) + big_int("123456789012345678901234567890"))
    assertEquals(big_int("-123456789012345678901234600658"), b_short(Short.MIN_VALUE) + big_int("-123456789012345678901234567890"))

    assertEquals(BigInteger, statictypeof(b_short(0) + big_int("0")))
  }

  function testShortBigDecimalAddition() {
    assertEquals(big_decimal("0"), b_short(0) + big_decimal("0"))
    assertEquals(big_decimal("23"), b_short(0) + big_decimal("23"))
    assertEquals(big_decimal("23.123"), b_short(0) + big_decimal("23.123"))
    assertEquals(big_decimal("-32"), b_short(0) + big_decimal("-32"))
    assertEquals(big_decimal("-32.456"), b_short(0) + big_decimal("-32.456"))
    assertEquals(big_decimal("123456789012345678901234567890.123456789"), b_short(0) + big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("-123456789012345678901234567890.123456789"), b_short(0) + big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("23"), b_short(23) + big_decimal("0"))
    assertEquals(big_decimal("46"), b_short(23) + big_decimal("23"))
    assertEquals(big_decimal("46.123"), b_short(23) + big_decimal("23.123"))
    assertEquals(big_decimal("-9"), b_short(23) + big_decimal("-32"))
    assertEquals(big_decimal("-9.456"), b_short(23) + big_decimal("-32.456"))
    assertEquals(big_decimal("123456789012345678901234567913.123456789"), b_short(23) + big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("-123456789012345678901234567867.123456789"), b_short(23) + big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("-32"), b_short(-32) + big_decimal("0"))
    assertEquals(big_decimal("-9"), b_short(-32) + big_decimal("23"))
    assertEquals(big_decimal("-8.877"), b_short(-32) + big_decimal("23.123"))
    assertEquals(big_decimal("-64"), b_short(-32) + big_decimal("-32"))
    assertEquals(big_decimal("-64.456"), b_short(-32) + big_decimal("-32.456"))
    assertEquals(big_decimal("123456789012345678901234567858.123456789"), b_short(-32) + big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("-123456789012345678901234567922.123456789"), b_short(-32) + big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("32767"), b_short(Short.MAX_VALUE) + big_decimal("0"))
    assertEquals(big_decimal("32790"), b_short(Short.MAX_VALUE) + big_decimal("23"))
    assertEquals(big_decimal("32790.123"), b_short(Short.MAX_VALUE) + big_decimal("23.123"))
    assertEquals(big_decimal("32735"), b_short(Short.MAX_VALUE) + big_decimal("-32"))
    assertEquals(big_decimal("32734.544"), b_short(Short.MAX_VALUE) + big_decimal("-32.456"))
    assertEquals(big_decimal("123456789012345678901234600657.123456789"), b_short(Short.MAX_VALUE) + big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("-123456789012345678901234535123.123456789"), b_short(Short.MAX_VALUE) + big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("-32768"), b_short(Short.MIN_VALUE) + big_decimal("0"))
    assertEquals(big_decimal("-32745"), b_short(Short.MIN_VALUE) + big_decimal("23"))
    assertEquals(big_decimal("-32744.877"), b_short(Short.MIN_VALUE) + big_decimal("23.123"))
    assertEquals(big_decimal("-32800"), b_short(Short.MIN_VALUE) + big_decimal("-32"))
    assertEquals(big_decimal("-32800.456"), b_short(Short.MIN_VALUE) + big_decimal("-32.456"))
    assertEquals(big_decimal("123456789012345678901234535122.123456789"), b_short(Short.MIN_VALUE) + big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("-123456789012345678901234600658.123456789"), b_short(Short.MIN_VALUE) + big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(BigDecimal, statictypeof(b_short(0) + big_decimal("0")))
  }

}

