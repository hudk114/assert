# assert
a simple assert library for params test

# usage

    npm install @hudk/assert
    
    import { expect } from '@hudk/assert'
    expect(obj).isNull()

# api

## expect

    expect(obj).api()
1. equal(o)
1. isNull()
1. isUndefined()
1. isUndefinedOrNull()
1. isEmptyOrNull()
1. isZeroOrNull()
1. isEmptyOrZeroOrNull()
1. isStr() : is string or not
1. isNum()
1. isNaturalNum()
1. isPosInt() : is postive int or not
1. lengthShorterThan(length)
1. lengthLongerThan(length)
1. followReg(pattern) : user pattern for test, for example, `expect(obj).followReg(/^\d+?$/)` is equal to the `expect(obj).isNaturalNum()`