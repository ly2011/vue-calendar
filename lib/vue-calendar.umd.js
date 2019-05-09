(function webpackUniversalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(require('vue')) } else if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { exports['vue-calendar'] = factory(require('vue')) } else { root['vue-calendar'] = factory(root['Vue']) }
})((typeof self !== 'undefined' ? self : this), function (__WEBPACK_EXTERNAL_MODULE__8bbf__) {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		}
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/ 		}
      /******/ 	}
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 	}
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value)
      /******/ 		if (mode & 8) return value
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/ 		var ns = Object.create(null)
      /******/ 		__webpack_require__.r(ns)
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
      /******/ 		return ns
      /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		var getter = module && module.__esModule
      /******/ 			? function getDefault () { return module['default'] }
      /******/ 			: function getModuleExports () { return module }
      /******/ 		__webpack_require__.d(getter, 'a', getter)
      /******/ 		return getter
      /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 'fb15')
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ '014b':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      // ECMAScript 6 symbols shim
      var global = __webpack_require__('e53d')
      var has = __webpack_require__('07e3')
      var DESCRIPTORS = __webpack_require__('8e60')
      var $export = __webpack_require__('63b6')
      var redefine = __webpack_require__('9138')
      var META = __webpack_require__('ebfd').KEY
      var $fails = __webpack_require__('294c')
      var shared = __webpack_require__('dbdb')
      var setToStringTag = __webpack_require__('45f2')
      var uid = __webpack_require__('62a0')
      var wks = __webpack_require__('5168')
      var wksExt = __webpack_require__('ccb9')
      var wksDefine = __webpack_require__('6718')
      var enumKeys = __webpack_require__('47ee')
      var isArray = __webpack_require__('9003')
      var anObject = __webpack_require__('e4ae')
      var isObject = __webpack_require__('f772')
      var toIObject = __webpack_require__('36c3')
      var toPrimitive = __webpack_require__('1bc3')
      var createDesc = __webpack_require__('aebd')
      var _create = __webpack_require__('a159')
      var gOPNExt = __webpack_require__('0395')
      var $GOPD = __webpack_require__('bf0b')
      var $DP = __webpack_require__('d9f6')
      var $keys = __webpack_require__('c3a1')
      var gOPD = $GOPD.f
      var dP = $DP.f
      var gOPN = gOPNExt.f
      var $Symbol = global.Symbol
      var $JSON = global.JSON
      var _stringify = $JSON && $JSON.stringify
      var PROTOTYPE = 'prototype'
      var HIDDEN = wks('_hidden')
      var TO_PRIMITIVE = wks('toPrimitive')
      var isEnum = {}.propertyIsEnumerable
      var SymbolRegistry = shared('symbol-registry')
      var AllSymbols = shared('symbols')
      var OPSymbols = shared('op-symbols')
      var ObjectProto = Object[PROTOTYPE]
      var USE_NATIVE = typeof $Symbol === 'function'
      var QObject = global.QObject
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc = DESCRIPTORS && $fails(function () {
        return _create(dP({}, 'a', {
          get: function () { return dP(this, 'a', { value: 7 }).a }
        })).a != 7
      }) ? function (it, key, D) {
          var protoDesc = gOPD(ObjectProto, key)
          if (protoDesc) delete ObjectProto[key]
          dP(it, key, D)
          if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc)
        } : dP

      var wrap = function (tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE])
        sym._k = tag
        return sym
      }

      var isSymbol = USE_NATIVE && typeof $Symbol.iterator === 'symbol' ? function (it) {
        return typeof it === 'symbol'
      } : function (it) {
        return it instanceof $Symbol
      }

      var $defineProperty = function defineProperty (it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D)
        anObject(it)
        key = toPrimitive(key, true)
        anObject(D)
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}))
            it[HIDDEN][key] = true
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false
            D = _create(D, { enumerable: createDesc(0, false) })
          } return setSymbolDesc(it, key, D)
        } return dP(it, key, D)
      }
      var $defineProperties = function defineProperties (it, P) {
        anObject(it)
        var keys = enumKeys(P = toIObject(P))
        var i = 0
        var l = keys.length
        var key
        while (l > i) $defineProperty(it, key = keys[i++], P[key])
        return it
      }
      var $create = function create (it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P)
      }
      var $propertyIsEnumerable = function propertyIsEnumerable (key) {
        var E = isEnum.call(this, key = toPrimitive(key, true))
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true
      }
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (it, key) {
        it = toIObject(it)
        key = toPrimitive(key, true)
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return
        var D = gOPD(it, key)
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true
        return D
      }
      var $getOwnPropertyNames = function getOwnPropertyNames (it) {
        var names = gOPN(toIObject(it))
        var result = []
        var i = 0
        var key
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key)
        } return result
      }
      var $getOwnPropertySymbols = function getOwnPropertySymbols (it) {
        var IS_OP = it === ObjectProto
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it))
        var result = []
        var i = 0
        var key
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key])
        } return result
      }

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function Symbol () {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!')
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined)
          var $set = function (value) {
            if (this === ObjectProto) $set.call(OPSymbols, value)
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
            setSymbolDesc(this, tag, createDesc(1, value))
          }
          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set })
          return wrap(tag)
        }
        redefine($Symbol[PROTOTYPE], 'toString', function toString () {
          return this._k
        })

        $GOPD.f = $getOwnPropertyDescriptor
        $DP.f = $defineProperty
        __webpack_require__('6abf').f = gOPNExt.f = $getOwnPropertyNames
        __webpack_require__('355d').f = $propertyIsEnumerable
        __webpack_require__('9aa9').f = $getOwnPropertySymbols

        if (DESCRIPTORS && !__webpack_require__('b8e3')) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true)
        }

        wksExt.f = function (name) {
          return wrap(wks(name))
        }
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol })

      for (var es6Symbols = (
        // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
          'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
        ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++])

      for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++])

      $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        'for': function (key) {
          return has(SymbolRegistry, key += '')
            ? SymbolRegistry[key]
            : SymbolRegistry[key] = $Symbol(key)
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor (sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!')
          for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key
        },
        useSetter: function () { setter = true },
        useSimple: function () { setter = false }
      })

      $export($export.S + $export.F * !USE_NATIVE, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      })

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
        var S = $Symbol()
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
        return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}'
      })), 'JSON', {
        stringify: function stringify (it) {
          var args = [it]
          var i = 1
          var replacer, $replacer
          while (arguments.length > i) args.push(arguments[i++])
          $replacer = replacer = args[1]
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
          if (!isArray(replacer)) {
            replacer = function (key, value) {
              if (typeof $replacer === 'function') value = $replacer.call(this, key, value)
              if (!isSymbol(value)) return value
            }
          }
          args[1] = replacer
          return _stringify.apply($JSON, args)
        }
      })

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__('35e8')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, 'Symbol')
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, 'Math', true)
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, 'JSON', true)
      /***/ },

    /***/ '01f9':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var LIBRARY = __webpack_require__('2d00')
      var $export = __webpack_require__('5ca1')
      var redefine = __webpack_require__('2aba')
      var hide = __webpack_require__('32e9')
      var Iterators = __webpack_require__('84f2')
      var $iterCreate = __webpack_require__('41a0')
      var setToStringTag = __webpack_require__('7f20')
      var getPrototypeOf = __webpack_require__('38fd')
      var ITERATOR = __webpack_require__('2b4c')('iterator')
      var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = '@@iterator'
      var KEYS = 'keys'
      var VALUES = 'values'

      var returnThis = function () { return this }

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next)
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind]
          switch (kind) {
            case KEYS: return function keys () { return new Constructor(this, kind) }
            case VALUES: return function values () { return new Constructor(this, kind) }
          } return function entries () { return new Constructor(this, kind) }
        }
        var TAG = NAME + ' Iterator'
        var DEF_VALUES = DEFAULT == VALUES
        var VALUES_BUG = false
        var proto = Base.prototype
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
        var $default = $native || getMethod(DEFAULT)
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native
        var methods, key, IteratorPrototype
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true)
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') hide(IteratorPrototype, ITERATOR, returnThis)
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true
          $default = function values () { return $native.call(this) }
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default)
        }
        // Plug for library
        Iterators[NAME] = $default
        Iterators[TAG] = returnThis
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          }
          if (FORCED) {
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key])
            }
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods)
        }
        return methods
      }
      /***/ },

    /***/ '0395':
    /***/ function (module, exports, __webpack_require__) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = __webpack_require__('36c3')
      var gOPN = __webpack_require__('6abf').f
      var toString = {}.toString

      var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window) : []

      var getWindowNames = function (it) {
        try {
          return gOPN(it)
        } catch (e) {
          return windowNames.slice()
        }
      }

      module.exports.f = function getOwnPropertyNames (it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it))
      }
      /***/ },

    /***/ '07e3':
    /***/ function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
      }
      /***/ },

    /***/ '0a49':
    /***/ function (module, exports, __webpack_require__) {
      // 0 -> Array#forEach
      // 1 -> Array#map
      // 2 -> Array#filter
      // 3 -> Array#some
      // 4 -> Array#every
      // 5 -> Array#find
      // 6 -> Array#findIndex
      var ctx = __webpack_require__('9b43')
      var IObject = __webpack_require__('626a')
      var toObject = __webpack_require__('4bf8')
      var toLength = __webpack_require__('9def')
      var asc = __webpack_require__('cd1c')
      module.exports = function (TYPE, $create) {
        var IS_MAP = TYPE == 1
        var IS_FILTER = TYPE == 2
        var IS_SOME = TYPE == 3
        var IS_EVERY = TYPE == 4
        var IS_FIND_INDEX = TYPE == 6
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
        var create = $create || asc
        return function ($this, callbackfn, that) {
          var O = toObject($this)
          var self = IObject(O)
          var f = ctx(callbackfn, that, 3)
          var length = toLength(self.length)
          var index = 0
          var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
          var val, res
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              val = self[index]
              res = f(val, index, O)
              if (TYPE) {
                if (IS_MAP) result[index] = res // map
                else if (res) {
                  switch (TYPE) {
                    case 3: return true // some
                    case 5: return val // find
                    case 6: return index // findIndex
                    case 2: result.push(val) // filter
                  }
                } else if (IS_EVERY) return false // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
        }
      }
      /***/ },

    /***/ '0d58':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__('ce10')
      var enumBugKeys = __webpack_require__('e11e')

      module.exports = Object.keys || function keys (O) {
        return $keys(O, enumBugKeys)
      }
      /***/ },

    /***/ '0fc9':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('3a38')
      var max = Math.max
      var min = Math.min
      module.exports = function (index, length) {
        index = toInteger(index)
        return index < 0 ? max(index + length, 0) : min(index, length)
      }
      /***/ },

    /***/ '1169':
    /***/ function (module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__('2d95')
      module.exports = Array.isArray || function isArray (arg) {
        return cof(arg) == 'Array'
      }
      /***/ },

    /***/ '1495':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var anObject = __webpack_require__('cb7c')
      var getKeys = __webpack_require__('0d58')

      module.exports = __webpack_require__('9e1e') ? Object.defineProperties : function defineProperties (O, Properties) {
        anObject(O)
        var keys = getKeys(Properties)
        var length = keys.length
        var i = 0
        var P
        while (length > i) dP.f(O, P = keys[i++], Properties[P])
        return O
      }
      /***/ },

    /***/ '1691':
    /***/ function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',')
      /***/ },

    /***/ '1bc3':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__('f772')
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it
        var fn, val
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        throw TypeError("Can't convert object to primitive value")
      }
      /***/ },

    /***/ '1ec9':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('f772')
      var document = __webpack_require__('e53d').document
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement)
      module.exports = function (it) {
        return is ? document.createElement(it) : {}
      }
      /***/ },

    /***/ '230e':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var document = __webpack_require__('7726').document
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement)
      module.exports = function (it) {
        return is ? document.createElement(it) : {}
      }
      /***/ },

    /***/ '241e':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__('25eb')
      module.exports = function (it) {
        return Object(defined(it))
      }
      /***/ },

    /***/ '252c':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* WEBPACK VAR INJECTION */(function (global) { /* unused harmony export install */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () { return ResizeObserver })
        function getInternetExplorerVersion () {
          var ua = window.navigator.userAgent

          var msie = ua.indexOf('MSIE ')
          if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
          }

          var trident = ua.indexOf('Trident/')
          if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:')
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
          }

          var edge = ua.indexOf('Edge/')
          if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
          }

          // other browser
          return -1
        }

        var isIE = void 0

        function initCompat () {
          if (!initCompat.init) {
            initCompat.init = true
            isIE = getInternetExplorerVersion() !== -1
          }
        }

        var ResizeObserver = { render: function render () {
          var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'resize-observer', attrs: { 'tabindex': '-1' } })
        },
        staticRenderFns: [],
        _scopeId: 'data-v-b329ee4c',
        name: 'resize-observer',

        methods: {
          compareAndNotify: function compareAndNotify () {
            if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
              this._w = this.$el.offsetWidth
              this._h = this.$el.offsetHeight
              this.$emit('notify')
            }
          },
          addResizeHandlers: function addResizeHandlers () {
            this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify)
            this.compareAndNotify()
          },
          removeResizeHandlers: function removeResizeHandlers () {
            if (this._resizeObject && this._resizeObject.onload) {
              if (!isIE && this._resizeObject.contentDocument) {
                this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify)
              }
              delete this._resizeObject.onload
            }
          }
        },

        mounted: function mounted () {
          var _this = this

          initCompat()
          this.$nextTick(function () {
            _this._w = _this.$el.offsetWidth
            _this._h = _this.$el.offsetHeight
          })
          var object = document.createElement('object')
          this._resizeObject = object
          object.setAttribute('aria-hidden', 'true')
          object.setAttribute('tabindex', -1)
          object.onload = this.addResizeHandlers
          object.type = 'text/html'
          if (isIE) {
            this.$el.appendChild(object)
          }
          object.data = 'about:blank'
          if (!isIE) {
            this.$el.appendChild(object)
          }
        },
        beforeDestroy: function beforeDestroy () {
          this.removeResizeHandlers()
        }
        }

        // Install the components
        function install (Vue) {
          Vue.component('resize-observer', ResizeObserver)
          Vue.component('ResizeObserver', ResizeObserver)
        }

        // Plugin
        var plugin = {
          // eslint-disable-next-line no-undef
          version: '0.4.5',
          install: install
        }

        // Auto-install
        var GlobalVue = null
        if (typeof window !== 'undefined') {
          GlobalVue = window.Vue
        } else if (typeof global !== 'undefined') {
          GlobalVue = global.Vue
        }
        if (GlobalVue) {
          GlobalVue.use(plugin)
        }

        /* unused harmony default export */ var _unused_webpack_default_export = (plugin)
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
      /***/ },

    /***/ '25eb':
    /***/ function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it)
        return it
      }
      /***/ },

    /***/ '268f':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('fde4')
      /***/ },

    /***/ '294c':
    /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (e) {
          return true
        }
      }
      /***/ },

    /***/ '2aba':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var hide = __webpack_require__('32e9')
      var has = __webpack_require__('69a8')
      var SRC = __webpack_require__('ca5a')('src')
      var $toString = __webpack_require__('fa5b')
      var TO_STRING = 'toString'
      var TPL = ('' + $toString).split(TO_STRING)

      __webpack_require__('8378').inspectSource = function (it) {
        return $toString.call(it)
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val === 'function'
        if (isFunction) has(val, 'name') || hide(val, 'name', key)
        if (O[key] === val) return
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)))
        if (O === global) {
          O[key] = val
        } else if (!safe) {
          delete O[key]
          hide(O, key, val)
        } else if (O[key]) {
          O[key] = val
        } else {
          hide(O, key, val)
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString () {
        return typeof this === 'function' && this[SRC] || $toString.call(this)
      })
      /***/ },

    /***/ '2aeb':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__('cb7c')
      var dPs = __webpack_require__('1495')
      var enumBugKeys = __webpack_require__('e11e')
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')
      var Empty = function () { /* empty */ }
      var PROTOTYPE = 'prototype'

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__('230e')('iframe')
        var i = enumBugKeys.length
        var lt = '<'
        var gt = '>'
        var iframeDocument
        iframe.style.display = 'none'
        __webpack_require__('fab2').appendChild(iframe)
        iframe.src = 'javascript:' // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
        iframeDocument.close()
        createDict = iframeDocument.F
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
        return createDict()
      }

      module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O)
          result = new Empty()
          Empty[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = createDict()
        return Properties === undefined ? result : dPs(result, Properties)
      }
      /***/ },

    /***/ '2b4c':
    /***/ function (module, exports, __webpack_require__) {
      var store = __webpack_require__('5537')('wks')
      var uid = __webpack_require__('ca5a')
      var Symbol = __webpack_require__('7726').Symbol
      var USE_SYMBOL = typeof Symbol === 'function'

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
      }

      $exports.store = store
      /***/ },

    /***/ '2d00':
    /***/ function (module, exports) {
      module.exports = false
      /***/ },

    /***/ '2d95':
    /***/ function (module, exports) {
      var toString = {}.toString

      module.exports = function (it) {
        return toString.call(it).slice(8, -1)
      }
      /***/ },

    /***/ '32a6':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__('241e')
      var $keys = __webpack_require__('c3a1')

      __webpack_require__('ce7e')('keys', function () {
        return function keys (it) {
          return $keys(toObject(it))
        }
      })
      /***/ },

    /***/ '32e9':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc')
      var createDesc = __webpack_require__('4630')
      module.exports = __webpack_require__('9e1e') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value))
      } : function (object, key, value) {
        object[key] = value
        return object
      }
      /***/ },

    /***/ '32fc':
    /***/ function (module, exports, __webpack_require__) {
      var document = __webpack_require__('e53d').document
      module.exports = document && document.documentElement
      /***/ },

    /***/ '335c':
    /***/ function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__('6b4c')
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it)
      }
      /***/ },

    /***/ '355d':
    /***/ function (module, exports) {
      exports.f = {}.propertyIsEnumerable
      /***/ },

    /***/ '35e8':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('d9f6')
      var createDesc = __webpack_require__('aebd')
      module.exports = __webpack_require__('8e60') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value))
      } : function (object, key, value) {
        object[key] = value
        return object
      }
      /***/ },

    /***/ '36c3':
    /***/ function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__('335c')
      var defined = __webpack_require__('25eb')
      module.exports = function (it) {
        return IObject(defined(it))
      }
      /***/ },

    /***/ '38fd':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__('69a8')
      var toObject = __webpack_require__('4bf8')
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')
      var ObjectProto = Object.prototype

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O)
        if (has(O, IE_PROTO)) return O[IE_PROTO]
        if (typeof O.constructor === 'function' && O instanceof O.constructor) {
          return O.constructor.prototype
        } return O instanceof Object ? ObjectProto : null
      }
      /***/ },

    /***/ '3a38':
    /***/ function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil
      var floor = Math.floor
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
      }
      /***/ },

    /***/ '41a0':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var create = __webpack_require__('2aeb')
      var descriptor = __webpack_require__('4630')
      var setToStringTag = __webpack_require__('7f20')
      var IteratorPrototype = {}

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__('32e9')(IteratorPrototype, __webpack_require__('2b4c')('iterator'), function () { return this })

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) })
        setToStringTag(Constructor, NAME + ' Iterator')
      }
      /***/ },

    /***/ '454f':
    /***/ function (module, exports, __webpack_require__) {
      __webpack_require__('46a7')
      var $Object = __webpack_require__('584a').Object
      module.exports = function defineProperty (it, key, desc) {
        return $Object.defineProperty(it, key, desc)
      }
      /***/ },

    /***/ '4588':
    /***/ function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil
      var floor = Math.floor
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
      }
      /***/ },

    /***/ '45f2':
    /***/ function (module, exports, __webpack_require__) {
      var def = __webpack_require__('d9f6').f
      var has = __webpack_require__('07e3')
      var TAG = __webpack_require__('5168')('toStringTag')

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag })
      }
      /***/ },

    /***/ '4630':
    /***/ function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        }
      }
      /***/ },

    /***/ '46a7':
    /***/ function (module, exports, __webpack_require__) {
      var $export = __webpack_require__('63b6')
      // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
      $export($export.S + $export.F * !__webpack_require__('8e60'), 'Object', { defineProperty: __webpack_require__('d9f6').f })
      /***/ },

    /***/ '47ee':
    /***/ function (module, exports, __webpack_require__) {
      // all enumerable object keys, includes symbols
      var getKeys = __webpack_require__('c3a1')
      var gOPS = __webpack_require__('9aa9')
      var pIE = __webpack_require__('355d')
      module.exports = function (it) {
        var result = getKeys(it)
        var getSymbols = gOPS.f
        if (getSymbols) {
          var symbols = getSymbols(it)
          var isEnum = pIE.f
          var i = 0
          var key
          while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key)
        } return result
      }
      /***/ },

    /***/ '4bf8':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return Object(defined(it))
      }
      /***/ },

    /***/ '5168':
    /***/ function (module, exports, __webpack_require__) {
      var store = __webpack_require__('dbdb')('wks')
      var uid = __webpack_require__('62a0')
      var Symbol = __webpack_require__('e53d').Symbol
      var USE_SYMBOL = typeof Symbol === 'function'

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
      }

      $exports.store = store
      /***/ },

    /***/ '5537':
    /***/ function (module, exports, __webpack_require__) {
      var core = __webpack_require__('8378')
      var global = __webpack_require__('7726')
      var SHARED = '__core-js_shared__'
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {})
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__('2d00') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
      })
      /***/ },

    /***/ '5559':
    /***/ function (module, exports, __webpack_require__) {
      var shared = __webpack_require__('dbdb')('keys')
      var uid = __webpack_require__('62a0')
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key))
      }
      /***/ },

    /***/ '584a':
    /***/ function (module, exports) {
      var core = module.exports = { version: '2.6.5' }
      if (typeof __e === 'number') __e = core // eslint-disable-line no-undef
      /***/ },

    /***/ '5b4e':
    /***/ function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__('36c3')
      var toLength = __webpack_require__('b447')
      var toAbsoluteIndex = __webpack_require__('0fc9')
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this)
          var length = toLength(O.length)
          var index = toAbsoluteIndex(fromIndex, length)
          var value
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++]
              // eslint-disable-next-line no-self-compare
              if (value != value) return true
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0
              }
            }
          } return !IS_INCLUDES && -1
        }
      }
      /***/ },

    /***/ '5ca1':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('7726')
      var core = __webpack_require__('8378')
      var hide = __webpack_require__('32e9')
      var redefine = __webpack_require__('2aba')
      var ctx = __webpack_require__('9b43')
      var PROTOTYPE = 'prototype'

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F
        var IS_GLOBAL = type & $export.G
        var IS_STATIC = type & $export.S
        var IS_PROTO = type & $export.P
        var IS_BIND = type & $export.B
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
        var key, own, out, exp
        if (IS_GLOBAL) source = name
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined
          // export native or passed
          out = (own ? target : source)[key]
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out
          // extend global
          if (target) redefine(target, key, out, type & $export.U)
          // export
          if (exports[key] != out) hide(exports, key, exp)
          if (IS_PROTO && expProto[key] != out) expProto[key] = out
        }
      }
      global.core = core
      // type bitmap
      $export.F = 1 // forced
      $export.G = 2 // global
      $export.S = 4 // static
      $export.P = 8 // proto
      $export.B = 16 // bind
      $export.W = 32 // wrap
      $export.U = 64 // safe
      $export.R = 128 // real proto method for `library`
      module.exports = $export
      /***/ },

    /***/ '613b':
    /***/ function (module, exports, __webpack_require__) {
      var shared = __webpack_require__('5537')('keys')
      var uid = __webpack_require__('ca5a')
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key))
      }
      /***/ },

    /***/ '626a':
    /***/ function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__('2d95')
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it)
      }
      /***/ },

    /***/ '62a0':
    /***/ function (module, exports) {
      var id = 0
      var px = Math.random()
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
      }
      /***/ },

    /***/ '63b6':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('e53d')
      var core = __webpack_require__('584a')
      var ctx = __webpack_require__('d864')
      var hide = __webpack_require__('35e8')
      var has = __webpack_require__('07e3')
      var PROTOTYPE = 'prototype'

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F
        var IS_GLOBAL = type & $export.G
        var IS_STATIC = type & $export.S
        var IS_PROTO = type & $export.P
        var IS_BIND = type & $export.B
        var IS_WRAP = type & $export.W
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
        var expProto = exports[PROTOTYPE]
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
        var key, own, out
        if (IS_GLOBAL) source = name
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined
          if (own && has(exports, key)) continue
          // export native or passed
          out = own ? target[key] : source[key]
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] !== 'function' ? source[key]
          // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
              : IS_WRAP && target[key] == out ? (function (C) {
                var F = function (a, b, c) {
                  if (this instanceof C) {
                    switch (arguments.length) {
                      case 0: return new C()
                      case 1: return new C(a)
                      case 2: return new C(a, b)
                    } return new C(a, b, c)
                  } return C.apply(this, arguments)
                }
                F[PROTOTYPE] = C[PROTOTYPE]
                return F
                // make static versions for prototype methods
              })(out) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out
          // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
          if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out)
          }
        }
      }
      // type bitmap
      $export.F = 1 // forced
      $export.G = 2 // global
      $export.S = 4 // static
      $export.P = 8 // proto
      $export.B = 16 // bind
      $export.W = 32 // wrap
      $export.U = 64 // safe
      $export.R = 128 // real proto method for `library`
      module.exports = $export
      /***/ },

    /***/ '6718':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('e53d')
      var core = __webpack_require__('584a')
      var LIBRARY = __webpack_require__('b8e3')
      var wksExt = __webpack_require__('ccb9')
      var defineProperty = __webpack_require__('d9f6').f
      module.exports = function (name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {})
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) })
      }
      /***/ },

    /***/ '6821':
    /***/ function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__('626a')
      var defined = __webpack_require__('be13')
      module.exports = function (it) {
        return IObject(defined(it))
      }
      /***/ },

    /***/ '69a8':
    /***/ function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
      }
      /***/ },

    /***/ '6a99':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__('d3f4')
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it
        var fn, val
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
        throw TypeError("Can't convert object to primitive value")
      }
      /***/ },

    /***/ '6abf':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__('e6f3')
      var hiddenKeys = __webpack_require__('1691').concat('length', 'prototype')

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
        return $keys(O, hiddenKeys)
      }
      /***/ },

    /***/ '6b4c':
    /***/ function (module, exports) {
      var toString = {}.toString

      module.exports = function (it) {
        return toString.call(it).slice(8, -1)
      }
      /***/ },

    /***/ '7514':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
      var $export = __webpack_require__('5ca1')
      var $find = __webpack_require__('0a49')(5)
      var KEY = 'find'
      var forced = true
      // Shouldn't skip holes
      if (KEY in []) Array(1)[KEY](function () { forced = false })
      $export($export.P + $export.F * forced, 'Array', {
        find: function find (callbackfn /* , that = undefined */) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
        }
      })
      __webpack_require__('9c6c')(KEY)
      /***/ },

    /***/ '7726':
    /***/ function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')()
      if (typeof __g === 'number') __g = global // eslint-disable-line no-undef
      /***/ },

    /***/ '77f1':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('4588')
      var max = Math.max
      var min = Math.min
      module.exports = function (index, length) {
        index = toInteger(index)
        return index < 0 ? max(index + length, 0) : min(index, length)
      }
      /***/ },

    /***/ '794b':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__('8e60') && !__webpack_require__('294c')(function () {
        return Object.defineProperty(__webpack_require__('1ec9')('div'), 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ '79aa':
    /***/ function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(it + ' is not a function!')
        return it
      }
      /***/ },

    /***/ '79e5':
    /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (e) {
          return true
        }
      }
      /***/ },

    /***/ '7e90':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('d9f6')
      var anObject = __webpack_require__('e4ae')
      var getKeys = __webpack_require__('c3a1')

      module.exports = __webpack_require__('8e60') ? Object.defineProperties : function defineProperties (O, Properties) {
        anObject(O)
        var keys = getKeys(Properties)
        var length = keys.length
        var i = 0
        var P
        while (length > i) dP.f(O, P = keys[i++], Properties[P])
        return O
      }
      /***/ },

    /***/ '7f20':
    /***/ function (module, exports, __webpack_require__) {
      var def = __webpack_require__('86cc').f
      var has = __webpack_require__('69a8')
      var TAG = __webpack_require__('2b4c')('toStringTag')

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag })
      }
      /***/ },

    /***/ '7f7f':
    /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc').f
      var FProto = Function.prototype
      var nameRE = /^\s*function ([^ (]*)/
      var NAME = 'name'

      // 19.2.4.2 name
      NAME in FProto || __webpack_require__('9e1e') && dP(FProto, NAME, {
        configurable: true,
        get: function () {
          try {
            return ('' + this).match(nameRE)[1]
          } catch (e) {
            return ''
          }
        }
      })
      /***/ },

    /***/ '8378':
    /***/ function (module, exports) {
      var core = module.exports = { version: '2.6.5' }
      if (typeof __e === 'number') __e = core // eslint-disable-line no-undef
      /***/ },

    /***/ '84f2':
    /***/ function (module, exports) {
      module.exports = {}
      /***/ },

    /***/ '85f2':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('454f')
      /***/ },

    /***/ '86cc':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('cb7c')
      var IE8_DOM_DEFINE = __webpack_require__('c69a')
      var toPrimitive = __webpack_require__('6a99')
      var dP = Object.defineProperty

      exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes)
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }
      /***/ },

    /***/ '8aae':
    /***/ function (module, exports, __webpack_require__) {
      __webpack_require__('32a6')
      module.exports = __webpack_require__('584a').Object.keys
      /***/ },

    /***/ '8bbf':
    /***/ function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__
      /***/ },

    /***/ '8e60':
    /***/ function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('294c')(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ '9003':
    /***/ function (module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__('6b4c')
      module.exports = Array.isArray || function isArray (arg) {
        return cof(arg) == 'Array'
      }
      /***/ },

    /***/ '9138':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('35e8')
      /***/ },

    /***/ '9aa9':
    /***/ function (module, exports) {
      exports.f = Object.getOwnPropertySymbols
      /***/ },

    /***/ '9b43':
    /***/ function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__('d8e8')
      module.exports = function (fn, that, length) {
        aFunction(fn)
        if (that === undefined) return fn
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a)
          }
          case 2: return function (a, b) {
            return fn.call(that, a, b)
          }
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments)
        }
      }
      /***/ },

    /***/ '9c6c':
    /***/ function (module, exports, __webpack_require__) {
      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__('2b4c')('unscopables')
      var ArrayProto = Array.prototype
      if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__('32e9')(ArrayProto, UNSCOPABLES, {})
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true
      }
      /***/ },

    /***/ '9def':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__('4588')
      var min = Math.min
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
      }
      /***/ },

    /***/ '9e1e':
    /***/ function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('79e5')(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ '9ff3':
    /***/ function (module, exports, __webpack_require__) {
      !(function (e, t) { true ? module.exports = t() : undefined }(this, function () { return (function (e) { var t = {}; function r (n) { if (t[n]) return t[n].exports; var a = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (var a in e)r.d(n, a, function (t) { return e[t] }.bind(null, a)); return n }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, 'a', t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = '', r(r.s = 2) }([function (e, t, r) { 'use strict'; e.exports = function (e) { return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return /^\d{3,4}-\d{7,8}$/.test(e) } }, function (e, t, r) { 'use strict'; var n = {}; var a = r(3); a.keys().forEach(function (e) { var t = e.substring(e.lastIndexOf('/') + 1, e.lastIndexOf('.')); n[t] = a(e) }), e.exports = n }, function (e, t, r) { var n = { './array/arrayEqual.js': 4, './array/difference.js': 5, './array/intersection.js': 6, './array/union.js': 7, './money/changeToChinese.js': 8, './money/formatMoney.js': 9, './money/numberToChinese.js': 12, './number/random.js': 13, './object/isEmptyObject.js': 14, './regexp/isEmail.js': 15, './regexp/isIdCard.js': 16, './regexp/isPhoneNum.js': 0, './regexp/isPhoneOrTel.js': 17, './regexp/isTel.js': 1, './regexp/isUrl.js': 18, './time/formatDate.js': 19, './time/getCurMonthLastDate.js': 20, './time/getDaysInMonth.js': 21, './time/isLeapYear.js': 22, './time/isSameDay.js': 23, './time/sleep.js': 24 }; function a (e) { var t = o(e); return r(t) } function o (e) { if (!r.o(n, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = 'MODULE_NOT_FOUND', t } return n[e] }a.keys = function () { return Object.keys(n) }, a.resolve = o, e.exports = a, a.id = 3 }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { if (e === t) return !0; if (e.length != t.length) return !1; for (var r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1; return !0 } }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { var r = new Set(t); return e.filter(function (e) { return !r.has(e) }) } }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { var r = new Set(t); return e.filter(function (e) { return r.has(e) }) } }, function (e, t, r) { 'use strict'; e.exports = function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)t[r] = arguments[r]; var n = Array.prototype.concat.apply([], t); return Array.from(new Set(n)) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { if (typeof e === 'number' && (e = new String(e)), e = (e = (e = e.replace(/,/g, '')).replace(/ /g, '')).replace(/￥/g, ''), isNaN(e)) return ''; for (var t = String(e).split('.'), r = '', n = t[0].length - 1; n >= 0; n--) { if (t[0].length > 16 || t[0] > Number.MAX_SAFE_INTEGER) return ''; var a = ''; var o = t[0].charAt(n); switch (o) { case '0':a = '零' + a; break; case '1':a = '壹' + a; break; case '2':a = '贰' + a; break; case '3':a = '叁' + a; break; case '4':a = '肆' + a; break; case '5':a = '伍' + a; break; case '6':a = '陆' + a; break; case '7':a = '柒' + a; break; case '8':a = '捌' + a; break; case '9':a = '玖' + a } switch (t[0].length - n - 1) { case 0:a += '元'; break; case 1:o != 0 && (a += '拾'); break; case 2:o != 0 && (a += '佰'); break; case 3:o != 0 && (a += '仟'); break; case 4:a += '万'; break; case 5:o != 0 && (a += '拾'); break; case 6:o != 0 && (a += '佰'); break; case 7:o != 0 && (a += '仟'); break; case 8:a += '亿'; break; case 9:a += '拾' }r = a + r } if (e.indexOf('.') != -1) { t[1].length > 2 && (t[1] = t[1].substr(0, 2)); for (var c = 0; c < t[1].length; c++) { switch (tmpnewchar = '', perchar = t[1].charAt(c), perchar) { case '0':tmpnewchar = '零' + tmpnewchar; break; case '1':tmpnewchar = '壹' + tmpnewchar; break; case '2':tmpnewchar = '贰' + tmpnewchar; break; case '3':tmpnewchar = '叁' + tmpnewchar; break; case '4':tmpnewchar = '肆' + tmpnewchar; break; case '5':tmpnewchar = '伍' + tmpnewchar; break; case '6':tmpnewchar = '陆' + tmpnewchar; break; case '7':tmpnewchar = '柒' + tmpnewchar; break; case '8':tmpnewchar = '捌' + tmpnewchar; break; case '9':tmpnewchar = '玖' + tmpnewchar }c == 0 && (tmpnewchar += '角'), c == 1 && (tmpnewchar += '分'), r += tmpnewchar } } for (;r.search('零零') != -1;)r = r.replace('零零', '零'); return (r = (r = (r = (r = (r = (r = r.replace('零亿', '亿')).replace('亿万', '亿')).replace('零万', '万')).replace('零元', '元')).replace('零角', '')).replace('零分', '')).charAt(r.length - 1) == '元' && (r += '整'), r } }, function (e, t, r) { 'use strict'; var n = r(10)(r(11)); e.exports = function (e, t, r) { return void 0 === t && (t = {}), void 0 === r && (r = 'zh-CN'), t = (0, n.default)({}, { style: 'decimal', currency: 'CNY', useGrouping: !1, minimumFractionDigits: 2, maximumFractionDigits: 2 }, t), typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function' ? new Intl.NumberFormat(r, t).format(e) : e.toLocaleString(r, t) } }, function (e, t) { e.exports = function (e) { return e && e.__esModule ? e : { default: e } } }, function (e, t, r) { 'use strict'; function n () { return (n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) }r.r(t), r.d(t, 'default', function () { return n }) }, function (e, t, r) { 'use strict'; e.exports = function (e) { for (var t = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'), r = new Array('', '十', '百', '仟', '萬', '億', '点', ''), n = ('' + e).replace(/(^0*)/g, '').split('.'), a = 0, o = '', c = n[0].length - 1; c >= 0; c--) { switch (a) { case 0:o = r[7] + o; break; case 4:new RegExp('0{4}//d{' + (n[0].length - c - 1) + '}$').test(n[0]) || (o = r[4] + o); break; case 8:o = r[5] + o, r[7] = r[5], a = 0 }a % 4 == 2 && n[0].charAt(c + 2) != 0 && n[0].charAt(c + 1) == 0 && (o = t[0] + o), n[0].charAt(c) != 0 && (o = t[n[0].charAt(c)] + r[a % 4] + o), a++ } if (n.length > 1) { o += r[6]; for (var s = 0; s < n[1].length; s++)o += t[n[1].charAt(s)] } return o == '一十' && (o = '十'), o.match(/^一/) && o.length == 3 && (o = o.replace('一', '')), o } }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { if (void 0 === e && void 0 === t) return 0; if (void 0 === t && (t = e, e = 0), e > t) { var r = [t, e]; e = r[0], t = r[1] } return Math.floor(e + Math.random() * (t + 1 - e)) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return !(!e || typeof e !== 'object' || Array.isArray(e) || Object.keys(e).length) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e) } }, function (e, t, r) { 'use strict'; var n = r(1); var a = r(0); e.exports = function (e) { return typeof e !== 'number' && n(e) || a(e) } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i.test(e) } }, function (e, t, r) { 'use strict'; var n = { __proto__: null, Y: function (e, t) { var r = e.getFullYear(); return t.length < 3 ? r % 100 : r }, y: function (e, t) { var r = e.getFullYear(); return t.length < 3 ? r % 100 : r }, M: function (e) { return e.getMonth() + 1 }, D: function (e) { return e.getDate() }, d: function (e) { return e.getDate() }, H: function (e) { return e.getHours() }, m: function (e) { return e.getMinutes() }, s: function (e) { return e.getSeconds() }, e: function (e) { return '日一二三四五六'.charAt(e.getDay()) } }; e.exports = function (e, t) { void 0 === e && (e = new Date()), void 0 === t && (t = 'YYYY-MM-DD HH:mm:ss'); var r = new Date(e).toString() === 'Invalid Date'; if (r) throw new TypeError('Offer an illegal value {date} to format'); return r ? '' : (!e || e instanceof Date || (e = new Date(e)), +e ? t.replace(/([YyMDdHms])\1*/g, function (t, r) { for (r = n[r](e, t) + ''; r.length < t.length;)r = '0' + r; return r }) : '') } }, function (e, t, r) { 'use strict'; e.exports = function (e) { var t = new Date(+e); return t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(t.getDate() - 1), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t } }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { return e = parseInt(e, 10), t = parseInt(t, 10), new Date(e, t, 0).getDate() } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } }, function (e, t, r) { 'use strict'; e.exports = function (e, t) { if (!e || !t) return !1; if (!(e instanceof Date && t instanceof Date)) return !1; try { var r = e.getFullYear(); var n = e.getMonth() + 1; var a = e.getDate(); var o = t.getFullYear(); var c = t.getMonth() + 1; return a === t.getDate() && n === c && r === o } catch (e) { return !1 } } }, function (e, t, r) { 'use strict'; e.exports = function (e) { return new Promise(function (t, r) { setTimeout(function () { t() }, e) }) } }])) }))
      /***/ },

    /***/ 'a159':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__('e4ae')
      var dPs = __webpack_require__('7e90')
      var enumBugKeys = __webpack_require__('1691')
      var IE_PROTO = __webpack_require__('5559')('IE_PROTO')
      var Empty = function () { /* empty */ }
      var PROTOTYPE = 'prototype'

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__('1ec9')('iframe')
        var i = enumBugKeys.length
        var lt = '<'
        var gt = '>'
        var iframeDocument
        iframe.style.display = 'none'
        __webpack_require__('32fc').appendChild(iframe)
        iframe.src = 'javascript:' // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
        iframeDocument.close()
        createDict = iframeDocument.F
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
        return createDict()
      }

      module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O)
          result = new Empty()
          Empty[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = createDict()
        return Properties === undefined ? result : dPs(result, Properties)
      }
      /***/ },

    /***/ 'a4bb':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('8aae')
      /***/ },

    /***/ 'ac6a':
    /***/ function (module, exports, __webpack_require__) {
      var $iterators = __webpack_require__('cadf')
      var getKeys = __webpack_require__('0d58')
      var redefine = __webpack_require__('2aba')
      var global = __webpack_require__('7726')
      var hide = __webpack_require__('32e9')
      var Iterators = __webpack_require__('84f2')
      var wks = __webpack_require__('2b4c')
      var ITERATOR = wks('iterator')
      var TO_STRING_TAG = wks('toStringTag')
      var ArrayValues = Iterators.Array

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      }

      for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME = collections[i]
        var explicit = DOMIterables[NAME]
        var Collection = global[NAME]
        var proto = Collection && Collection.prototype
        var key
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues)
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
          Iterators[NAME] = ArrayValues
          if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true)
        }
      }
      /***/ },

    /***/ 'aebd':
    /***/ function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        }
      }
      /***/ },

    /***/ 'b447':
    /***/ function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__('3a38')
      var min = Math.min
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
      }
      /***/ },

    /***/ 'b8e3':
    /***/ function (module, exports) {
      module.exports = true
      /***/ },

    /***/ 'bd8d':
    /***/ function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/ },

    /***/ 'be13':
    /***/ function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it)
        return it
      }
      /***/ },

    /***/ 'bf0b':
    /***/ function (module, exports, __webpack_require__) {
      var pIE = __webpack_require__('355d')
      var createDesc = __webpack_require__('aebd')
      var toIObject = __webpack_require__('36c3')
      var toPrimitive = __webpack_require__('1bc3')
      var has = __webpack_require__('07e3')
      var IE8_DOM_DEFINE = __webpack_require__('794b')
      var gOPD = Object.getOwnPropertyDescriptor

      exports.f = __webpack_require__('8e60') ? gOPD : function getOwnPropertyDescriptor (O, P) {
        O = toIObject(O)
        P = toPrimitive(P, true)
        if (IE8_DOM_DEFINE) {
          try {
            return gOPD(O, P)
          } catch (e) { /* empty */ }
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
      }
      /***/ },

    /***/ 'bf90':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      var toIObject = __webpack_require__('36c3')
      var $getOwnPropertyDescriptor = __webpack_require__('bf0b').f

      __webpack_require__('ce7e')('getOwnPropertyDescriptor', function () {
        return function getOwnPropertyDescriptor (it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key)
        }
      })
      /***/ },

    /***/ 'c366':
    /***/ function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__('6821')
      var toLength = __webpack_require__('9def')
      var toAbsoluteIndex = __webpack_require__('77f1')
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this)
          var length = toLength(O.length)
          var index = toAbsoluteIndex(fromIndex, length)
          var value
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++]
              // eslint-disable-next-line no-self-compare
              if (value != value) return true
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0
              }
            }
          } return !IS_INCLUDES && -1
        }
      }
      /***/ },

    /***/ 'c3a1':
    /***/ function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__('e6f3')
      var enumBugKeys = __webpack_require__('1691')

      module.exports = Object.keys || function keys (O) {
        return $keys(O, enumBugKeys)
      }
      /***/ },

    /***/ 'c69a':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(function () {
        return Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get: function () { return 7 } }).a != 7
      })
      /***/ },

    /***/ 'c8ba':
    /***/ function (module, exports) {
      var g

      // This works in non-strict mode
      g = (function () {
        return this
      })()

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')()
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g
      /***/ },

    /***/ 'c8ed':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('bd8d')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a)
      /***/ },

    /***/ 'ca5a':
    /***/ function (module, exports) {
      var id = 0
      var px = Math.random()
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
      }
      /***/ },

    /***/ 'cadf':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var addToUnscopables = __webpack_require__('9c6c')
      var step = __webpack_require__('d53b')
      var Iterators = __webpack_require__('84f2')
      var toIObject = __webpack_require__('6821')

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__('01f9')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated) // target
        this._i = 0 // next index
        this._k = kind // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t
        var kind = this._k
        var index = this._i++
        if (!O || index >= O.length) {
          this._t = undefined
          return step(1)
        }
        if (kind == 'keys') return step(0, index)
        if (kind == 'values') return step(0, O[index])
        return step(0, [index, O[index]])
      }, 'values')

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array

      addToUnscopables('keys')
      addToUnscopables('values')
      addToUnscopables('entries')
      /***/ },

    /***/ 'cb7c':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!')
        return it
      }
      /***/ },

    /***/ 'ccb9':
    /***/ function (module, exports, __webpack_require__) {
      exports.f = __webpack_require__('5168')
      /***/ },

    /***/ 'cd1c':
    /***/ function (module, exports, __webpack_require__) {
      // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
      var speciesConstructor = __webpack_require__('e853')

      module.exports = function (original, length) {
        return new (speciesConstructor(original))(length)
      }
      /***/ },

    /***/ 'ce10':
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('69a8')
      var toIObject = __webpack_require__('6821')
      var arrayIndexOf = __webpack_require__('c366')(false)
      var IE_PROTO = __webpack_require__('613b')('IE_PROTO')

      module.exports = function (object, names) {
        var O = toIObject(object)
        var i = 0
        var result = []
        var key
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key)
          }
        }
        return result
      }
      /***/ },

    /***/ 'ce7e':
    /***/ function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__('63b6')
      var core = __webpack_require__('584a')
      var fails = __webpack_require__('294c')
      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY]
        var exp = {}
        exp[KEY] = exec(fn)
        $export($export.S + $export.F * fails(function () { fn(1) }), 'Object', exp)
      }
      /***/ },

    /***/ 'd3f4':
    /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }
      /***/ },

    /***/ 'd53b':
    /***/ function (module, exports) {
      module.exports = function (done, value) {
        return { value: value, done: !!done }
      }
      /***/ },

    /***/ 'd864':
    /***/ function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__('79aa')
      module.exports = function (fn, that, length) {
        aFunction(fn)
        if (that === undefined) return fn
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a)
          }
          case 2: return function (a, b) {
            return fn.call(that, a, b)
          }
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments)
        }
      }
      /***/ },

    /***/ 'd8e8':
    /***/ function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(it + ' is not a function!')
        return it
      }
      /***/ },

    /***/ 'd9f6':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('e4ae')
      var IE8_DOM_DEFINE = __webpack_require__('794b')
      var toPrimitive = __webpack_require__('1bc3')
      var dP = Object.defineProperty

      exports.f = __webpack_require__('8e60') ? Object.defineProperty : function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes)
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }
      /***/ },

    /***/ 'dbdb':
    /***/ function (module, exports, __webpack_require__) {
      var core = __webpack_require__('584a')
      var global = __webpack_require__('e53d')
      var SHARED = '__core-js_shared__'
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {})
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__('b8e3') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
      })
      /***/ },

    /***/ 'e11e':
    /***/ function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',')
      /***/ },

    /***/ 'e265':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('ed33')
      /***/ },

    /***/ 'e37d':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* WEBPACK VAR INJECTION */(function (global) { /* unused harmony export VClosePopover */
        /* unused harmony export VPopover */
        /* unused harmony export VTooltip */
        /* unused harmony export createTooltip */
        /* unused harmony export destroyTooltip */
        /* unused harmony export install */
        /* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('f0bd')
        /* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('252c')

        function _typeof (obj) {
          if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function (obj) {
              return typeof obj
            }
          } else {
            _typeof = function (obj) {
              return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
            }
          }

          return _typeof(obj)
        }

        function _classCallCheck (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties (target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass (Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _defineProperty (obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        function _objectSpread (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable
              }))
            }

            ownKeys.forEach(function (key) {
              _defineProperty(target, key, source[key])
            })
          }

          return target
        }

        var SVGAnimatedString = function SVGAnimatedString () {}

        if (typeof window !== 'undefined') {
          SVGAnimatedString = window.SVGAnimatedString
        }

        function convertToArray (value) {
          if (typeof value === 'string') {
            value = value.split(' ')
          }

          return value
        }
        /**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */

        function addClasses (el, classes) {
          var newClasses = convertToArray(classes)
          var classList

          if (el.className instanceof SVGAnimatedString) {
            classList = convertToArray(el.className.baseVal)
          } else {
            classList = convertToArray(el.className)
          }

          newClasses.forEach(function (newClass) {
            if (classList.indexOf(newClass) === -1) {
              classList.push(newClass)
            }
          })

          if (el instanceof SVGElement) {
            el.setAttribute('class', classList.join(' '))
          } else {
            el.className = classList.join(' ')
          }
        }
        /**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */

        function removeClasses (el, classes) {
          var newClasses = convertToArray(classes)
          var classList

          if (el.className instanceof SVGAnimatedString) {
            classList = convertToArray(el.className.baseVal)
          } else {
            classList = convertToArray(el.className)
          }

          newClasses.forEach(function (newClass) {
            var index = classList.indexOf(newClass)

            if (index !== -1) {
              classList.splice(index, 1)
            }
          })

          if (el instanceof SVGElement) {
            el.setAttribute('class', classList.join(' '))
          } else {
            el.className = classList.join(' ')
          }
        }
        var supportsPassive = false

        if (typeof window !== 'undefined') {
          supportsPassive = false

          try {
            var opts = Object.defineProperty({}, 'passive', {
              get: function get () {
                supportsPassive = true
              }
            })
            window.addEventListener('test', null, opts)
          } catch (e) {}
        }

        var DEFAULT_OPTIONS = {
          container: false,
          delay: 0,
          html: false,
          placement: 'top',
          title: '',
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: 'hover focus',
          offset: 0
        }
        var openTooltips = []

        var Tooltip =
/* #__PURE__ */
(function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip (_reference, _options) {
    var _this = this

    _classCallCheck(this, Tooltip)

    _defineProperty(this, '_events', [])

    _defineProperty(this, '_setTooltipNodeEvent', function (evt, reference, delay, options) {
      var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget

      var callback = function callback (evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget // Remove event listener after call

        _this._tooltipNode.removeEventListener(evt.type, callback) // If the new reference is not the reference element

        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this._scheduleHide(reference, options.delay, options, evt2)
        }
      }

      if (_this._tooltipNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        _this._tooltipNode.addEventListener(evt.type, callback)

        return true
      }

      return false
    })

    // apply user options over default ones
    _options = _objectSpread({}, DEFAULT_OPTIONS, _options)
    _reference.jquery && (_reference = _reference[0])
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this) // cache reference and options

    this.reference = _reference
    this.options = _options // set initial state

    this._isOpen = false

    this._init()
  } //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */

  _createClass(Tooltip, [{
    key: 'show',
    value: function show () {
      this._show(this.reference, this.options)
    }
    /**
     * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#hide
     * @memberof Tooltip
     */

  }, {
    key: 'hide',
    value: function hide () {
      this._hide()
    }
    /**
     * Hides and destroys an element’s tooltip.
     * @method Tooltip#dispose
     * @memberof Tooltip
     */

  }, {
    key: 'dispose',
    value: function dispose () {
      this._dispose()
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#toggle
     * @memberof Tooltip
     */

  }, {
    key: 'toggle',
    value: function toggle () {
      if (this._isOpen) {
        return this.hide()
      } else {
        return this.show()
      }
    }
  }, {
    key: 'setClasses',
    value: function setClasses (classes) {
      this._classes = classes
    }
  }, {
    key: 'setContent',
    value: function setContent (content) {
      this.options.title = content

      if (this._tooltipNode) {
        this._setContent(content, this.options)
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions (options) {
      var classesUpdated = false
      var classes = options && options.classes || directive.options.defaultClass

      if (this._classes !== classes) {
        this.setClasses(classes)
        classesUpdated = true
      }

      options = getOptions(options)
      var needPopperUpdate = false
      var needRestart = false

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
        needRestart = true
      }

      for (var key in options) {
        this.options[key] = options[key]
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen
          this.dispose()

          this._init()

          if (isOpen) {
            this.show()
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update()
        }
      }
    } //
    // Private methods
    //

  }, {
    key: '_init',
    value: function _init () {
      // get events list
      var events = typeof this.options.trigger === 'string' ? this.options.trigger.split(' ') : []
      this._isDisposed = false
      this._enableDocumentTouch = events.indexOf('manual') === -1
      events = events.filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1
      }) // set event listeners

      this._setEventListeners(this.reference, events, this.options) // title attribute

      this.$_originalTitle = this.reference.getAttribute('title')
      this.reference.removeAttribute('title')
      this.reference.setAttribute('data-original-title', this.$_originalTitle)
    }
    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */

  }, {
    key: '_create',
    value: function _create (reference, template) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div')
      tooltipGenerator.innerHTML = template.trim()
      var tooltipNode = tooltipGenerator.childNodes[0] // add unique ID to our tooltip (needed for accessibility reasons)

      tooltipNode.id = 'tooltip_'.concat(Math.random().toString(36).substr(2, 10)) // Initially hide the tooltip
      // The attribute will be switched in a next frame so
      // CSS transitions can play

      tooltipNode.setAttribute('aria-hidden', 'true')

      if (this.options.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        tooltipNode.addEventListener('mouseenter', this.hide)
        tooltipNode.addEventListener('click', this.hide)
      } // return the generated tooltip node

      return tooltipNode
    }
  }, {
    key: '_setContent',
    value: function _setContent (content, options) {
      var _this2 = this

      this.asyncContent = false

      this._applyContent(content, options).then(function () {
        _this2.popperInstance.update()
      })
    }
  }, {
    key: '_applyContent',
    value: function _applyContent (title, options) {
      var _this3 = this

      return new Promise(function (resolve, reject) {
        var allowHtml = options.html
        var rootNode = _this3._tooltipNode
        if (!rootNode) return
        var titleNode = rootNode.querySelector(_this3.options.innerSelector)

        if (title.nodeType === 1) {
          // if title is a node, append it only if allowHtml is true
          if (allowHtml) {
            while (titleNode.firstChild) {
              titleNode.removeChild(titleNode.firstChild)
            }

            titleNode.appendChild(title)
          }
        } else if (typeof title === 'function') {
          // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
          var result = title()

          if (result && typeof result.then === 'function') {
            _this3.asyncContent = true
            options.loadingClass && addClasses(rootNode, options.loadingClass)

            if (options.loadingContent) {
              _this3._applyContent(options.loadingContent, options)
            }

            result.then(function (asyncResult) {
              options.loadingClass && removeClasses(rootNode, options.loadingClass)
              return _this3._applyContent(asyncResult, options)
            }).then(resolve).catch(reject)
          } else {
            _this3._applyContent(result, options).then(resolve).catch(reject)
          }

          return
        } else {
          // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
          allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title
        }

        resolve()
      })
    }
  }, {
    key: '_show',
    value: function _show (reference, options) {
      if (options && typeof options.container === 'string') {
        var container = document.querySelector(options.container)
        if (!container) return
      }

      clearTimeout(this._disposeTimer)
      options = Object.assign({}, options)
      delete options.offset
      var updateClasses = true

      if (this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes)
        updateClasses = false
      }

      var result = this._ensureShown(reference, options)

      if (updateClasses && this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes)
      }

      addClasses(reference, ['v-tooltip-open'])
      return result
    }
  }, {
    key: '_ensureShown',
    value: function _ensureShown (reference, options) {
      var _this4 = this

      // don't show if it's already visible
      if (this._isOpen) {
        return this
      }

      this._isOpen = true
      openTooltips.push(this) // if the tooltipNode already exists, just show it

      if (this._tooltipNode) {
        this._tooltipNode.style.display = ''

        this._tooltipNode.setAttribute('aria-hidden', 'false')

        this.popperInstance.enableEventListeners()
        this.popperInstance.update()

        if (this.asyncContent) {
          this._setContent(options.title, options)
        }

        return this
      } // get title

      var title = reference.getAttribute('title') || options.title // don't show tooltip if no title is defined

      if (!title) {
        return this
      } // create tooltip node

      var tooltipNode = this._create(reference, options.template)

      this._tooltipNode = tooltipNode // Add `aria-describedby` to our reference element for accessibility reasons

      reference.setAttribute('aria-describedby', tooltipNode.id) // append tooltip to container

      var container = this._findContainer(options.container, reference)

      this._append(tooltipNode, container)

      var popperOptions = _objectSpread({}, options.popperOptions, {
        placement: options.placement
      })

      popperOptions.modifiers = _objectSpread({}, popperOptions.modifiers, {
        arrow: {
          element: this.options.arrowSelector
        }
      })

      if (options.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        }
      }

      this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'](reference, tooltipNode, popperOptions)

      this._setContent(title, options) // Fix position

      requestAnimationFrame(function () {
        if (!_this4._isDisposed && _this4.popperInstance) {
          _this4.popperInstance.update() // Show the tooltip

          requestAnimationFrame(function () {
            if (!_this4._isDisposed) {
              _this4._isOpen && tooltipNode.setAttribute('aria-hidden', 'false')
            } else {
              _this4.dispose()
            }
          })
        } else {
          _this4.dispose()
        }
      })
      return this
    }
  }, {
    key: '_noLongerOpen',
    value: function _noLongerOpen () {
      var index = openTooltips.indexOf(this)

      if (index !== -1) {
        openTooltips.splice(index, 1)
      }
    }
  }, {
    key: '_hide',
    value: function _hide ()
    /* reference, options */
    {
      var _this5 = this

      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this
      }

      this._isOpen = false

      this._noLongerOpen() // hide tooltipNode

      this._tooltipNode.style.display = 'none'

      this._tooltipNode.setAttribute('aria-hidden', 'true')

      this.popperInstance.disableEventListeners()
      clearTimeout(this._disposeTimer)
      var disposeTime = directive.options.disposeTimeout

      if (disposeTime !== null) {
        this._disposeTimer = setTimeout(function () {
          if (_this5._tooltipNode) {
            _this5._tooltipNode.removeEventListener('mouseenter', _this5.hide)

            _this5._tooltipNode.removeEventListener('click', _this5.hide) // Don't remove popper instance, just the HTML element

            _this5._removeTooltipNode()
          }
        }, disposeTime)
      }

      removeClasses(this.reference, ['v-tooltip-open'])
      return this
    }
  }, {
    key: '_removeTooltipNode',
    value: function _removeTooltipNode () {
      if (!this._tooltipNode) return
      var parentNode = this._tooltipNode.parentNode

      if (parentNode) {
        parentNode.removeChild(this._tooltipNode)
        this.reference.removeAttribute('aria-describedby')
      }

      this._tooltipNode = null
    }
  }, {
    key: '_dispose',
    value: function _dispose () {
      var _this6 = this

      this._isDisposed = true
      this.reference.removeAttribute('data-original-title')

      if (this.$_originalTitle) {
        this.reference.setAttribute('title', this.$_originalTitle)
      } // remove event listeners first to prevent any unexpected behaviour

      this._events.forEach(function (_ref) {
        var func = _ref.func
        var event = _ref.event

        _this6.reference.removeEventListener(event, func)
      })

      this._events = []

      if (this._tooltipNode) {
        this._hide()

        this._tooltipNode.removeEventListener('mouseenter', this.hide)

        this._tooltipNode.removeEventListener('click', this.hide) // destroy instance

        this.popperInstance.destroy() // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          this._removeTooltipNode()
        }
      } else {
        this._noLongerOpen()
      }

      return this
    }
  }, {
    key: '_findContainer',
    value: function _findContainer (container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container)
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode
      }

      return container
    }
    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append (tooltipNode, container) {
      container.appendChild(tooltipNode)
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners (reference, events, options) {
      var _this7 = this

      var directEvents = []
      var oppositeEvents = []
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter')
            oppositeEvents.push('mouseleave')
            if (_this7.options.hideOnTargetClick) oppositeEvents.push('click')
            break

          case 'focus':
            directEvents.push('focus')
            oppositeEvents.push('blur')
            if (_this7.options.hideOnTargetClick) oppositeEvents.push('click')
            break

          case 'click':
            directEvents.push('click')
            oppositeEvents.push('click')
            break
        }
      }) // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func (evt) {
          if (_this7._isOpen === true) {
            return
          }

          evt.usedByTooltip = true

          _this7._scheduleShow(reference, options.delay, options, evt)
        }

        _this7._events.push({
          event: event,
          func: func
        })

        reference.addEventListener(event, func)
      }) // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func (evt) {
          if (evt.usedByTooltip === true) {
            return
          }

          _this7._scheduleHide(reference, options.delay, options, evt)
        }

        _this7._events.push({
          event: event,
          func: func
        })

        reference.addEventListener(event, func)
      })
    }
  }, {
    key: '_onDocumentTouch',
    value: function _onDocumentTouch (event) {
      if (this._enableDocumentTouch) {
        this._scheduleHide(this.reference, this.options.delay, this.options, event)
      }
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow (reference, delay, options
    /*, evt */
    ) {
      var _this8 = this

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0
      clearTimeout(this._scheduleTimer)
      this._scheduleTimer = window.setTimeout(function () {
        return _this8._show(reference, options)
      }, computedDelay)
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide (reference, delay, options, evt) {
      var _this9 = this

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0
      clearTimeout(this._scheduleTimer)
      this._scheduleTimer = window.setTimeout(function () {
        if (_this9._isOpen === false) {
          return
        }

        if (!document.body.contains(_this9._tooltipNode)) {
          return
        } // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it

        if (evt.type === 'mouseleave') {
          var isSet = _this9._setTooltipNodeEvent(evt, reference, delay, options) // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary

          if (isSet) {
            return
          }
        }

        _this9._hide(reference, options)
      }, computedDelay)
    }
  }])

  return Tooltip
}()) // Hide tooltips on touch devices

        if (typeof document !== 'undefined') {
          document.addEventListener('touchstart', function (event) {
            for (var i = 0; i < openTooltips.length; i++) {
              openTooltips[i]._onDocumentTouch(event)
            }
          }, supportsPassive ? {
            passive: true,
            capture: true
          } : true)
        }
        /**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

        /**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

        var state = {
          enabled: true
        }
        var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']
        var defaultOptions = {
          // Default tooltip placement relative to target element
          defaultPlacement: 'top',
          // Default CSS classes applied to the tooltip element
          defaultClass: 'vue-tooltip-theme',
          // Default CSS classes applied to the target element of the tooltip
          defaultTargetClass: 'has-tooltip',
          // Is the content HTML by default?
          defaultHtml: true,
          // Default HTML template of the tooltip element
          // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
          // Change if the classes conflict with other libraries (for example bootstrap)
          defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          // Selector used to get the arrow element in the tooltip template
          defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
          // Selector used to get the inner content element in the tooltip template
          defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
          // Delay (ms)
          defaultDelay: 0,
          // Default events that trigger the tooltip
          defaultTrigger: 'hover focus',
          // Default position offset (px)
          defaultOffset: 0,
          // Default container where the tooltip will be appended
          defaultContainer: 'body',
          defaultBoundariesElement: undefined,
          defaultPopperOptions: {},
          // Class added when content is loading
          defaultLoadingClass: 'tooltip-loading',
          // Displayed when tooltip content is loading
          defaultLoadingContent: '...',
          // Hide on mouseover tooltip
          autoHide: true,
          // Close tooltip on click on tooltip target?
          defaultHideOnTargetClick: true,
          // Auto destroy tooltip DOM nodes (ms)
          disposeTimeout: 5000,
          // Options for popover
          popover: {
            defaultPlacement: 'bottom',
            // Use the `popoverClass` prop for theming
            defaultClass: 'vue-popover-theme',
            // Base class (change if conflicts with other libraries)
            defaultBaseClass: 'tooltip popover',
            // Wrapper class (contains arrow and inner)
            defaultWrapperClass: 'wrapper',
            // Inner content class
            defaultInnerClass: 'tooltip-inner popover-inner',
            // Arrow class
            defaultArrowClass: 'tooltip-arrow popover-arrow',
            // Class added when popover is open
            defaultOpenClass: 'open',
            defaultDelay: 0,
            defaultTrigger: 'click',
            defaultOffset: 0,
            defaultContainer: 'body',
            defaultBoundariesElement: undefined,
            defaultPopperOptions: {},
            // Hides if clicked outside of popover
            defaultAutoHide: true,
            // Update popper on content resize
            defaultHandleResize: true
          }
        }
        function getOptions (options) {
          var result = {
            placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
            delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
            html: typeof options.html !== 'undefined' ? options.html : directive.options.defaultHtml,
            template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
            arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
            innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
            trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
            offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
            container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
            boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
            autoHide: typeof options.autoHide !== 'undefined' ? options.autoHide : directive.options.autoHide,
            hideOnTargetClick: typeof options.hideOnTargetClick !== 'undefined' ? options.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
            loadingClass: typeof options.loadingClass !== 'undefined' ? options.loadingClass : directive.options.defaultLoadingClass,
            loadingContent: typeof options.loadingContent !== 'undefined' ? options.loadingContent : directive.options.defaultLoadingContent,
            popperOptions: _objectSpread({}, typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions)
          }

          if (result.offset) {
            var typeofOffset = _typeof(result.offset)

            var offset = result.offset // One value -> switch

            if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
              offset = '0, '.concat(offset)
            }

            if (!result.popperOptions.modifiers) {
              result.popperOptions.modifiers = {}
            }

            result.popperOptions.modifiers.offset = {
              offset: offset
            }
          }

          if (result.trigger && result.trigger.indexOf('click') !== -1) {
            result.hideOnTargetClick = false
          }

          return result
        }
        function getPlacement (value, modifiers) {
          var placement = value.placement

          for (var i = 0; i < positions.length; i++) {
            var pos = positions[i]

            if (modifiers[pos]) {
              placement = pos
            }
          }

          return placement
        }
        function getContent (value) {
          var type = _typeof(value)

          if (type === 'string') {
            return value
          } else if (value && type === 'object') {
            return value.content
          } else {
            return false
          }
        }
        function createTooltip (el, value) {
          var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
          var content = getContent(value)
          var classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass

          var opts = _objectSpread({
            title: content
          }, getOptions(_objectSpread({}, value, {
            placement: getPlacement(value, modifiers)
          })))

          var tooltip = el._tooltip = new Tooltip(el, opts)
          tooltip.setClasses(classes)
          tooltip._vueEl = el // Class on target

          var targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass
          el._tooltipTargetClasses = targetClasses
          addClasses(el, targetClasses)
          return tooltip
        }
        function destroyTooltip (el) {
          if (el._tooltip) {
            el._tooltip.dispose()

            delete el._tooltip
            delete el._tooltipOldShow
          }

          if (el._tooltipTargetClasses) {
            removeClasses(el, el._tooltipTargetClasses)
            delete el._tooltipTargetClasses
          }
        }
        function bind (el, _ref) {
          var value = _ref.value
          var oldValue = _ref.oldValue
          var modifiers = _ref.modifiers
          var content = getContent(value)

          if (!content || !state.enabled) {
            destroyTooltip(el)
          } else {
            var tooltip

            if (el._tooltip) {
              tooltip = el._tooltip // Content

              tooltip.setContent(content) // Options

              tooltip.setOptions(_objectSpread({}, value, {
                placement: getPlacement(value, modifiers)
              }))
            } else {
              tooltip = createTooltip(el, value, modifiers)
            } // Manual show

            if (typeof value.show !== 'undefined' && value.show !== el._tooltipOldShow) {
              el._tooltipOldShow = value.show
              value.show ? tooltip.show() : tooltip.hide()
            }
          }
        }
        var directive = {
          options: defaultOptions,
          bind: bind,
          update: bind,
          unbind: function unbind (el) {
            destroyTooltip(el)
          }
        }

        function addListeners (el) {
          el.addEventListener('click', onClick)
          el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
            passive: true
          } : false)
        }

        function removeListeners (el) {
          el.removeEventListener('click', onClick)
          el.removeEventListener('touchstart', onTouchStart)
          el.removeEventListener('touchend', onTouchEnd)
          el.removeEventListener('touchcancel', onTouchCancel)
        }

        function onClick (event) {
          var el = event.currentTarget
          event.closePopover = !el.$_vclosepopover_touch
          event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all
        }

        function onTouchStart (event) {
          if (event.changedTouches.length === 1) {
            var el = event.currentTarget
            el.$_vclosepopover_touch = true
            var touch = event.changedTouches[0]
            el.$_vclosepopover_touchPoint = touch
            el.addEventListener('touchend', onTouchEnd)
            el.addEventListener('touchcancel', onTouchCancel)
          }
        }

        function onTouchEnd (event) {
          var el = event.currentTarget
          el.$_vclosepopover_touch = false

          if (event.changedTouches.length === 1) {
            var touch = event.changedTouches[0]
            var firstTouch = el.$_vclosepopover_touchPoint
            event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20
            event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all
          }
        }

        function onTouchCancel (event) {
          var el = event.currentTarget
          el.$_vclosepopover_touch = false
        }

        var vclosepopover = {
          bind: function bind (el, _ref) {
            var value = _ref.value
            var modifiers = _ref.modifiers
            el.$_closePopoverModifiers = modifiers

            if (typeof value === 'undefined' || value) {
              addListeners(el)
            }
          },
          update: function update (el, _ref2) {
            var value = _ref2.value
            var oldValue = _ref2.oldValue
            var modifiers = _ref2.modifiers
            el.$_closePopoverModifiers = modifiers

            if (value !== oldValue) {
              if (typeof value === 'undefined' || value) {
                addListeners(el)
              } else {
                removeListeners(el)
              }
            }
          },
          unbind: function unbind (el) {
            removeListeners(el)
          }
        }

        function getDefault (key) {
          var value = directive.options.popover[key]

          if (typeof value === 'undefined') {
            return directive.options[key]
          }

          return value
        }

        var isIOS = false

        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
          isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }

        var openPopovers = []

        var Element = function Element () {}

        if (typeof window !== 'undefined') {
          Element = window.Element
        }

        var script = {
          name: 'VPopover',
          components: {
            ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_1__[/* ResizeObserver */ 'a']
          },
          props: {
            open: {
              type: Boolean,
              default: false
            },
            disabled: {
              type: Boolean,
              default: false
            },
            placement: {
              type: String,
              default: function _default () {
                return getDefault('defaultPlacement')
              }
            },
            delay: {
              type: [String, Number, Object],
              default: function _default () {
                return getDefault('defaultDelay')
              }
            },
            offset: {
              type: [String, Number],
              default: function _default () {
                return getDefault('defaultOffset')
              }
            },
            trigger: {
              type: String,
              default: function _default () {
                return getDefault('defaultTrigger')
              }
            },
            container: {
              type: [String, Object, Element, Boolean],
              default: function _default () {
                return getDefault('defaultContainer')
              }
            },
            boundariesElement: {
              type: [String, Element],
              default: function _default () {
                return getDefault('defaultBoundariesElement')
              }
            },
            popperOptions: {
              type: Object,
              default: function _default () {
                return getDefault('defaultPopperOptions')
              }
            },
            popoverClass: {
              type: [String, Array],
              default: function _default () {
                return getDefault('defaultClass')
              }
            },
            popoverBaseClass: {
              type: [String, Array],
              default: function _default () {
                return directive.options.popover.defaultBaseClass
              }
            },
            popoverInnerClass: {
              type: [String, Array],
              default: function _default () {
                return directive.options.popover.defaultInnerClass
              }
            },
            popoverWrapperClass: {
              type: [String, Array],
              default: function _default () {
                return directive.options.popover.defaultWrapperClass
              }
            },
            popoverArrowClass: {
              type: [String, Array],
              default: function _default () {
                return directive.options.popover.defaultArrowClass
              }
            },
            autoHide: {
              type: Boolean,
              default: function _default () {
                return directive.options.popover.defaultAutoHide
              }
            },
            handleResize: {
              type: Boolean,
              default: function _default () {
                return directive.options.popover.defaultHandleResize
              }
            },
            openGroup: {
              type: String,
              default: null
            },
            openClass: {
              type: [String, Array],
              default: function _default () {
                return directive.options.popover.defaultOpenClass
              }
            }
          },
          data: function data () {
            return {
              isOpen: false,
              id: Math.random().toString(36).substr(2, 10)
            }
          },
          computed: {
            cssClass: function cssClass () {
              return _defineProperty({}, this.openClass, this.isOpen)
            },
            popoverId: function popoverId () {
              return 'popover_'.concat(this.id)
            }
          },
          watch: {
            open: function open (val) {
              if (val) {
                this.show()
              } else {
                this.hide()
              }
            },
            disabled: function disabled (val, oldVal) {
              if (val !== oldVal) {
                if (val) {
                  this.hide()
                } else if (this.open) {
                  this.show()
                }
              }
            },
            container: function container (val) {
              if (this.isOpen && this.popperInstance) {
                var popoverNode = this.$refs.popover
                var reference = this.$refs.trigger
                var container = this.$_findContainer(this.container, reference)

                if (!container) {
                  console.warn('No container for popover', this)
                  return
                }

                container.appendChild(popoverNode)
                this.popperInstance.scheduleUpdate()
              }
            },
            trigger: function trigger (val) {
              this.$_removeEventListeners()
              this.$_addEventListeners()
            },
            placement: function placement (val) {
              var _this = this

              this.$_updatePopper(function () {
                _this.popperInstance.options.placement = val
              })
            },
            offset: '$_restartPopper',
            boundariesElement: '$_restartPopper',
            popperOptions: {
              handler: '$_restartPopper',
              deep: true
            }
          },
          created: function created () {
            this.$_isDisposed = false
            this.$_mounted = false
            this.$_events = []
            this.$_preventOpen = false
          },
          mounted: function mounted () {
            var popoverNode = this.$refs.popover
            popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)
            this.$_init()

            if (this.open) {
              this.show()
            }
          },
          deactivated: function deactivated () {
            this.hide()
          },
          beforeDestroy: function beforeDestroy () {
            this.dispose()
          },
          methods: {
            show: function show () {
              var _this2 = this

              var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
              var event = _ref2.event
              var _ref2$skipDelay = _ref2.skipDelay
              var _ref2$force = _ref2.force
              var force = _ref2$force === void 0 ? false : _ref2$force

              if (force || !this.disabled) {
                this.$_scheduleShow(event)
                this.$emit('show')
              }

              this.$emit('update:open', true)
              this.$_beingShowed = true
              requestAnimationFrame(function () {
                _this2.$_beingShowed = false
              })
            },
            hide: function hide () {
              var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
              var event = _ref3.event
              var _ref3$skipDelay = _ref3.skipDelay

              this.$_scheduleHide(event)
              this.$emit('hide')
              this.$emit('update:open', false)
            },
            dispose: function dispose () {
              this.$_isDisposed = true
              this.$_removeEventListeners()
              this.hide({
                skipDelay: true
              })

              if (this.popperInstance) {
                this.popperInstance.destroy() // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

                if (!this.popperInstance.options.removeOnDestroy) {
                  var popoverNode = this.$refs.popover
                  popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)
                }
              }

              this.$_mounted = false
              this.popperInstance = null
              this.isOpen = false
              this.$emit('dispose')
            },
            $_init: function $_init () {
              if (this.trigger.indexOf('manual') === -1) {
                this.$_addEventListeners()
              }
            },
            $_show: function $_show () {
              var _this3 = this

              var reference = this.$refs.trigger
              var popoverNode = this.$refs.popover
              clearTimeout(this.$_disposeTimer) // Already open

              if (this.isOpen) {
                return
              } // Popper is already initialized

              if (this.popperInstance) {
                this.isOpen = true
                this.popperInstance.enableEventListeners()
                this.popperInstance.scheduleUpdate()
              }

              if (!this.$_mounted) {
                var container = this.$_findContainer(this.container, reference)

                if (!container) {
                  console.warn('No container for popover', this)
                  return
                }

                container.appendChild(popoverNode)
                this.$_mounted = true
              }

              if (!this.popperInstance) {
                var popperOptions = _objectSpread({}, this.popperOptions, {
                  placement: this.placement
                })

                popperOptions.modifiers = _objectSpread({}, popperOptions.modifiers, {
                  arrow: _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.arrow, {
                    element: this.$refs.arrow
                  })
                })

                if (this.offset) {
                  var offset = this.$_getOffset()
                  popperOptions.modifiers.offset = _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.offset, {
                    offset: offset
                  })
                }

                if (this.boundariesElement) {
                  popperOptions.modifiers.preventOverflow = _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow, {
                    boundariesElement: this.boundariesElement
                  })
                }

                this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a'](reference, popoverNode, popperOptions) // Fix position

                requestAnimationFrame(function () {
                  if (_this3.hidden) {
                    _this3.hidden = false

                    _this3.$_hide()

                    return
                  }

                  if (!_this3.$_isDisposed && _this3.popperInstance) {
                    _this3.popperInstance.scheduleUpdate() // Show the tooltip

                    requestAnimationFrame(function () {
                      if (_this3.hidden) {
                        _this3.hidden = false

                        _this3.$_hide()

                        return
                      }

                      if (!_this3.$_isDisposed) {
                        _this3.isOpen = true
                      } else {
                        _this3.dispose()
                      }
                    })
                  } else {
                    _this3.dispose()
                  }
                })
              }

              var openGroup = this.openGroup

              if (openGroup) {
                var popover

                for (var i = 0; i < openPopovers.length; i++) {
                  popover = openPopovers[i]

                  if (popover.openGroup !== openGroup) {
                    popover.hide()
                    popover.$emit('close-group')
                  }
                }
              }

              openPopovers.push(this)
              this.$emit('apply-show')
            },
            $_hide: function $_hide () {
              var _this4 = this

              // Already hidden
              if (!this.isOpen) {
                return
              }

              var index = openPopovers.indexOf(this)

              if (index !== -1) {
                openPopovers.splice(index, 1)
              }

              this.isOpen = false

              if (this.popperInstance) {
                this.popperInstance.disableEventListeners()
              }

              clearTimeout(this.$_disposeTimer)
              var disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout

              if (disposeTime !== null) {
                this.$_disposeTimer = setTimeout(function () {
                  var popoverNode = _this4.$refs.popover

                  if (popoverNode) {
                    // Don't remove popper instance, just the HTML element
                    popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode)
                    _this4.$_mounted = false
                  }
                }, disposeTime)
              }

              this.$emit('apply-hide')
            },
            $_findContainer: function $_findContainer (container, reference) {
              // if container is a query, get the relative element
              if (typeof container === 'string') {
                container = window.document.querySelector(container)
              } else if (container === false) {
                // if container is `false`, set it to reference parent
                container = reference.parentNode
              }

              return container
            },
            $_getOffset: function $_getOffset () {
              var typeofOffset = _typeof(this.offset)

              var offset = this.offset // One value -> switch

              if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
                offset = '0, '.concat(offset)
              }

              return offset
            },
            $_addEventListeners: function $_addEventListeners () {
              var _this5 = this

              var reference = this.$refs.trigger
              var directEvents = []
              var oppositeEvents = []
              var events = typeof this.trigger === 'string' ? this.trigger.split(' ').filter(function (trigger) {
                return ['click', 'hover', 'focus'].indexOf(trigger) !== -1
              }) : []
              events.forEach(function (event) {
                switch (event) {
                  case 'hover':
                    directEvents.push('mouseenter')
                    oppositeEvents.push('mouseleave')
                    break

                  case 'focus':
                    directEvents.push('focus')
                    oppositeEvents.push('blur')
                    break

                  case 'click':
                    directEvents.push('click')
                    oppositeEvents.push('click')
                    break
                }
              }) // schedule show tooltip

              directEvents.forEach(function (event) {
                var func = function func (event) {
                  if (_this5.isOpen) {
                    return
                  }

                  event.usedByTooltip = true
                  !_this5.$_preventOpen && _this5.show({
                    event: event
                  })
                  _this5.hidden = false
                }

                _this5.$_events.push({
                  event: event,
                  func: func
                })

                reference.addEventListener(event, func)
              }) // schedule hide tooltip

              oppositeEvents.forEach(function (event) {
                var func = function func (event) {
                  if (event.usedByTooltip) {
                    return
                  }

                  _this5.hide({
                    event: event
                  })

                  _this5.hidden = true
                }

                _this5.$_events.push({
                  event: event,
                  func: func
                })

                reference.addEventListener(event, func)
              })
            },
            $_scheduleShow: function $_scheduleShow () {
              var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
              clearTimeout(this.$_scheduleTimer)

              if (skipDelay) {
                this.$_show()
              } else {
                // defaults to 0
                var computedDelay = parseInt(this.delay && this.delay.show || this.delay || 0)
                this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay)
              }
            },
            $_scheduleHide: function $_scheduleHide () {
              var _this6 = this

              var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
              var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
              clearTimeout(this.$_scheduleTimer)

              if (skipDelay) {
                this.$_hide()
              } else {
                // defaults to 0
                var computedDelay = parseInt(this.delay && this.delay.hide || this.delay || 0)
                this.$_scheduleTimer = setTimeout(function () {
                  if (!_this6.isOpen) {
                    return
                  } // if we are hiding because of a mouseleave, we must check that the new
                  // reference isn't the tooltip, because in this case we don't want to hide it

                  if (event && event.type === 'mouseleave') {
                    var isSet = _this6.$_setTooltipNodeEvent(event) // if we set the new event, don't hide the tooltip yet
                    // the new event will take care to hide it if necessary

                    if (isSet) {
                      return
                    }
                  }

                  _this6.$_hide()
                }, computedDelay)
              }
            },
            $_setTooltipNodeEvent: function $_setTooltipNodeEvent (event) {
              var _this7 = this

              var reference = this.$refs.trigger
              var popoverNode = this.$refs.popover
              var relatedreference = event.relatedreference || event.toElement || event.relatedTarget

              var callback = function callback (event2) {
                var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget // Remove event listener after call

                popoverNode.removeEventListener(event.type, callback) // If the new reference is not the reference element

                if (!reference.contains(relatedreference2)) {
                  // Schedule to hide tooltip
                  _this7.hide({
                    event: event2
                  })
                }
              }

              if (popoverNode.contains(relatedreference)) {
                // listen to mouseleave on the tooltip element to be able to hide the tooltip
                popoverNode.addEventListener(event.type, callback)
                return true
              }

              return false
            },
            $_removeEventListeners: function $_removeEventListeners () {
              var reference = this.$refs.trigger
              this.$_events.forEach(function (_ref4) {
                var func = _ref4.func
                var event = _ref4.event
                reference.removeEventListener(event, func)
              })
              this.$_events = []
            },
            $_updatePopper: function $_updatePopper (cb) {
              if (this.popperInstance) {
                cb()
                if (this.isOpen) this.popperInstance.scheduleUpdate()
              }
            },
            $_restartPopper: function $_restartPopper () {
              if (this.popperInstance) {
                var isOpen = this.isOpen
                this.dispose()
                this.$_isDisposed = false
                this.$_init()

                if (isOpen) {
                  this.show({
                    skipDelay: true,
                    force: true
                  })
                }
              }
            },
            $_handleGlobalClose: function $_handleGlobalClose (event) {
              var _this8 = this

              var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
              if (this.$_beingShowed) return
              this.hide({
                event: event
              })

              if (event.closePopover) {
                this.$emit('close-directive')
              } else {
                this.$emit('auto-hide')
              }

              if (touch) {
                this.$_preventOpen = true
                setTimeout(function () {
                  _this8.$_preventOpen = false
                }, 300)
              }
            },
            $_handleResize: function $_handleResize () {
              if (this.isOpen && this.popperInstance) {
                this.popperInstance.scheduleUpdate()
                this.$emit('resize')
              }
            }
          }
        }

        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
          if (isIOS) {
            document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
              passive: true,
              capture: true
            } : true)
          } else {
            window.addEventListener('click', handleGlobalClick, true)
          }
        }

        function handleGlobalClick (event) {
          handleGlobalClose(event)
        }

        function handleGlobalTouchend (event) {
          handleGlobalClose(event, true)
        }

        function handleGlobalClose (event) {
          var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          var _loop = function _loop (i) {
            var popover = openPopovers[i]

            if (popover.$refs.popover) {
              var contains = popover.$refs.popover.contains(event.target)
              requestAnimationFrame(function () {
                if (event.closeAllPopover || event.closePopover && contains || popover.autoHide && !contains) {
                  popover.$_handleGlobalClose(event, touch)
                }
              })
            }
          }

          // Delay so that close directive has time to set values
          for (var i = 0; i < openPopovers.length; i++) {
            _loop(i)
          }
        }

        function normalizeComponent (template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
          /* server only */
          , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
          if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector
            createInjector = shadowMode
            shadowMode = false
          } // Vue.extend constructor export interop.

          var options = typeof script === 'function' ? script.options : script // render functions

          if (template && template.render) {
            options.render = template.render
            options.staticRenderFns = template.staticRenderFns
            options._compiled = true // functional template

            if (isFunctionalTemplate) {
              options.functional = true
            }
          } // scopedId

          if (scopeId) {
            options._scopeId = scopeId
          }

          var hook

          if (moduleIdentifier) {
            // server build
            hook = function hook (context) {
              // 2.3 injection
              context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext // functional
      // 2.2 with runInNewContext: true

              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__
              } // inject component styles

              if (style) {
                style.call(this, createInjectorSSR(context))
              } // register component module identifier for async chunk inference

              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier)
              }
            } // used by ssr in case component is cached and beforeCreate
            // never gets called

            options._ssrRegister = hook
          } else if (style) {
            hook = shadowMode ? function () {
              style.call(this, createInjectorShadow(this.$root.$options.shadowRoot))
            } : function (context) {
              style.call(this, createInjector(context))
            }
          }

          if (hook) {
            if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render

              options.render = function renderWithStyleInjection (h, context) {
                hook.call(context)
                return originalRender(h, context)
              }
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
            }
          }

          return script
        }

        var normalizeComponent_1 = normalizeComponent

        /* script */
        var __vue_script__ = script
        /* template */

        var __vue_render__ = function __vue_render__ () {
          var _vm = this

          var _h = _vm.$createElement

          var _c = _vm._self._c || _h

          return _c('div', {
            staticClass: 'v-popover',
            class: _vm.cssClass
          }, [_c('div', {
            ref: 'trigger',
            staticClass: 'trigger',
            staticStyle: {
              display: 'inline-block'
            },
            attrs: {
              'aria-describedby': _vm.popoverId,
              tabindex: _vm.trigger.indexOf('focus') !== -1 ? 0 : undefined
            }
          }, [_vm._t('default')], 2), _vm._v(' '), _c('div', {
            ref: 'popover',
            class: [_vm.popoverBaseClass, _vm.popoverClass, _vm.cssClass],
            style: {
              visibility: _vm.isOpen ? 'visible' : 'hidden'
            },
            attrs: {
              id: _vm.popoverId,
              'aria-hidden': _vm.isOpen ? 'false' : 'true',
              tabindex: _vm.autoHide ? 0 : undefined
            },
            on: {
              keyup: function keyup ($event) {
                if (!$event.type.indexOf('key') && _vm._k($event.keyCode, 'esc', 27, $event.key, ['Esc', 'Escape'])) {
                  return null
                }

                _vm.autoHide && _vm.hide()
              }
            }
          }, [_c('div', {
            class: _vm.popoverWrapperClass
          }, [_c('div', {
            ref: 'inner',
            class: _vm.popoverInnerClass,
            staticStyle: {
              position: 'relative'
            }
          }, [_c('div', [_vm._t('popover')], 2), _vm._v(' '), _vm.handleResize ? _c('ResizeObserver', {
            on: {
              notify: _vm.$_handleResize
            }
          }) : _vm._e()], 1), _vm._v(' '), _c('div', {
            ref: 'arrow',
            class: _vm.popoverArrowClass
          })])])])
        }

        var __vue_staticRenderFns__ = []
        __vue_render__._withStripped = true
        /* style */

        var __vue_inject_styles__ = undefined
        /* scoped */

        var __vue_scope_id__ = undefined
        /* module identifier */

        var __vue_module_identifier__ = undefined
        /* functional template */

        var __vue_is_functional_template__ = false
        /* style inject */

        /* style inject SSR */

        var Popover = normalizeComponent_1({
          render: __vue_render__,
          staticRenderFns: __vue_staticRenderFns__
        }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined)

        /**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
        function listCacheClear () {
          this.__data__ = []
          this.size = 0
        }

        var _listCacheClear = listCacheClear

        /**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
        function eq (value, other) {
          return value === other || (value !== value && other !== other)
        }

        var eq_1 = eq

        /**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
        function assocIndexOf (array, key) {
          var length = array.length
          while (length--) {
            if (eq_1(array[length][0], key)) {
              return length
            }
          }
          return -1
        }

        var _assocIndexOf = assocIndexOf

        /** Used for built-in method references. */
        var arrayProto = Array.prototype

        /** Built-in value references. */
        var splice = arrayProto.splice

        /**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
        function listCacheDelete (key) {
          var data = this.__data__
          var index = _assocIndexOf(data, key)

          if (index < 0) {
            return false
          }
          var lastIndex = data.length - 1
          if (index == lastIndex) {
            data.pop()
          } else {
            splice.call(data, index, 1)
          }
          --this.size
          return true
        }

        var _listCacheDelete = listCacheDelete

        /**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
        function listCacheGet (key) {
          var data = this.__data__
          var index = _assocIndexOf(data, key)

          return index < 0 ? undefined : data[index][1]
        }

        var _listCacheGet = listCacheGet

        /**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
        function listCacheHas (key) {
          return _assocIndexOf(this.__data__, key) > -1
        }

        var _listCacheHas = listCacheHas

        /**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
        function listCacheSet (key, value) {
          var data = this.__data__
          var index = _assocIndexOf(data, key)

          if (index < 0) {
            ++this.size
            data.push([key, value])
          } else {
            data[index][1] = value
          }
          return this
        }

        var _listCacheSet = listCacheSet

        /**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
        function ListCache (entries) {
          var index = -1
          var length = entries == null ? 0 : entries.length

          this.clear()
          while (++index < length) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = _listCacheClear
        ListCache.prototype['delete'] = _listCacheDelete
        ListCache.prototype.get = _listCacheGet
        ListCache.prototype.has = _listCacheHas
        ListCache.prototype.set = _listCacheSet

        var _ListCache = ListCache

        /**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
        function stackClear () {
          this.__data__ = new _ListCache()
          this.size = 0
        }

        var _stackClear = stackClear

        /**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
        function stackDelete (key) {
          var data = this.__data__
          var result = data['delete'](key)

          this.size = data.size
          return result
        }

        var _stackDelete = stackDelete

        /**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
        function stackGet (key) {
          return this.__data__.get(key)
        }

        var _stackGet = stackGet

        /**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
        function stackHas (key) {
          return this.__data__.has(key)
        }

        var _stackHas = stackHas

        var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

        function createCommonjsModule (fn, module) {
          return module = { exports: {} }, fn(module, module.exports), module.exports
        }

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof commonjsGlobal === 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal

        var _freeGlobal = freeGlobal

        /** Detect free variable `self`. */
        var freeSelf = typeof self === 'object' && self && self.Object === Object && self

        /** Used as a reference to the global object. */
        var root = _freeGlobal || freeSelf || Function('return this')()

        var _root = root

        /** Built-in value references. */
        var Symbol$1 = _root.Symbol

        var _Symbol = Symbol$1

        /** Used for built-in method references. */
        var objectProto = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty

        /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
        var nativeObjectToString = objectProto.toString

        /** Built-in value references. */
        var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined

        /**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
        function getRawTag (value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag)
          var tag = value[symToStringTag]

          try {
            value[symToStringTag] = undefined
            var unmasked = true
          } catch (e) {}

          var result = nativeObjectToString.call(value)
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag
            } else {
              delete value[symToStringTag]
            }
          }
          return result
        }

        var _getRawTag = getRawTag

        /** Used for built-in method references. */
        var objectProto$1 = Object.prototype

        /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
        var nativeObjectToString$1 = objectProto$1.toString

        /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
        function objectToString (value) {
          return nativeObjectToString$1.call(value)
        }

        var _objectToString = objectToString

        /** `Object#toString` result references. */
        var nullTag = '[object Null]'
        var undefinedTag = '[object Undefined]'

        /** Built-in value references. */
        var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined

        /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
        function baseGetTag (value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag
          }
          return (symToStringTag$1 && symToStringTag$1 in Object(value))
            ? _getRawTag(value)
            : _objectToString(value)
        }

        var _baseGetTag = baseGetTag

        /**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
        function isObject (value) {
          var type = typeof value
          return value != null && (type == 'object' || type == 'function')
        }

        var isObject_1 = isObject

        /** `Object#toString` result references. */
        var asyncTag = '[object AsyncFunction]'
        var funcTag = '[object Function]'
        var genTag = '[object GeneratorFunction]'
        var proxyTag = '[object Proxy]'

        /**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
        function isFunction (value) {
          if (!isObject_1(value)) {
            return false
          }
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 9 which returns 'object' for typed arrays and other constructors.
          var tag = _baseGetTag(value)
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
        }

        var isFunction_1 = isFunction

        /** Used to detect overreaching core-js shims. */
        var coreJsData = _root['__core-js_shared__']

        var _coreJsData = coreJsData

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = (function () {
          var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '')
          return uid ? ('Symbol(src)_1.' + uid) : ''
        }())

        /**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
        function isMasked (func) {
          return !!maskSrcKey && (maskSrcKey in func)
        }

        var _isMasked = isMasked

        /** Used for built-in method references. */
        var funcProto = Function.prototype

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString

        /**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
        function toSource (func) {
          if (func != null) {
            try {
              return funcToString.call(func)
            } catch (e) {}
            try {
              return (func + '')
            } catch (e) {}
          }
          return ''
        }

        var _toSource = toSource

        /**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/

        /** Used for built-in method references. */
        var funcProto$1 = Function.prototype
        var objectProto$2 = Object.prototype

        /** Used to resolve the decompiled source of functions. */
        var funcToString$1 = funcProto$1.toString

        /** Used to check objects for own properties. */
        var hasOwnProperty$1 = objectProto$2.hasOwnProperty

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
        )

        /**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
        function baseIsNative (value) {
          if (!isObject_1(value) || _isMasked(value)) {
            return false
          }
          var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor
          return pattern.test(_toSource(value))
        }

        var _baseIsNative = baseIsNative

        /**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
        function getValue (object, key) {
          return object == null ? undefined : object[key]
        }

        var _getValue = getValue

        /**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
        function getNative (object, key) {
          var value = _getValue(object, key)
          return _baseIsNative(value) ? value : undefined
        }

        var _getNative = getNative

        /* Built-in method references that are verified to be native. */
        var Map = _getNative(_root, 'Map')

        var _Map = Map

        /* Built-in method references that are verified to be native. */
        var nativeCreate = _getNative(Object, 'create')

        var _nativeCreate = nativeCreate

        /**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
        function hashClear () {
          this.__data__ = _nativeCreate ? _nativeCreate(null) : {}
          this.size = 0
        }

        var _hashClear = hashClear

        /**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
        function hashDelete (key) {
          var result = this.has(key) && delete this.__data__[key]
          this.size -= result ? 1 : 0
          return result
        }

        var _hashDelete = hashDelete

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__'

        /** Used for built-in method references. */
        var objectProto$3 = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$2 = objectProto$3.hasOwnProperty

        /**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
        function hashGet (key) {
          var data = this.__data__
          if (_nativeCreate) {
            var result = data[key]
            return result === HASH_UNDEFINED ? undefined : result
          }
          return hasOwnProperty$2.call(data, key) ? data[key] : undefined
        }

        var _hashGet = hashGet

        /** Used for built-in method references. */
        var objectProto$4 = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$3 = objectProto$4.hasOwnProperty

        /**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
        function hashHas (key) {
          var data = this.__data__
          return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key)
        }

        var _hashHas = hashHas

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED$1 = '__lodash_hash_undefined__'

        /**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
        function hashSet (key, value) {
          var data = this.__data__
          this.size += this.has(key) ? 0 : 1
          data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value
          return this
        }

        var _hashSet = hashSet

        /**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
        function Hash (entries) {
          var index = -1
          var length = entries == null ? 0 : entries.length

          this.clear()
          while (++index < length) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = _hashClear
        Hash.prototype['delete'] = _hashDelete
        Hash.prototype.get = _hashGet
        Hash.prototype.has = _hashHas
        Hash.prototype.set = _hashSet

        var _Hash = Hash

        /**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
        function mapCacheClear () {
          this.size = 0
          this.__data__ = {
            'hash': new _Hash(),
            'map': new (_Map || _ListCache)(),
            'string': new _Hash()
          }
        }

        var _mapCacheClear = mapCacheClear

        /**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
        function isKeyable (value) {
          var type = typeof value
          return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
            ? (value !== '__proto__')
            : (value === null)
        }

        var _isKeyable = isKeyable

        /**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
        function getMapData (map, key) {
          var data = map.__data__
          return _isKeyable(key)
            ? data[typeof key === 'string' ? 'string' : 'hash']
            : data.map
        }

        var _getMapData = getMapData

        /**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
        function mapCacheDelete (key) {
          var result = _getMapData(this, key)['delete'](key)
          this.size -= result ? 1 : 0
          return result
        }

        var _mapCacheDelete = mapCacheDelete

        /**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
        function mapCacheGet (key) {
          return _getMapData(this, key).get(key)
        }

        var _mapCacheGet = mapCacheGet

        /**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
        function mapCacheHas (key) {
          return _getMapData(this, key).has(key)
        }

        var _mapCacheHas = mapCacheHas

        /**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
        function mapCacheSet (key, value) {
          var data = _getMapData(this, key)
          var size = data.size

          data.set(key, value)
          this.size += data.size == size ? 0 : 1
          return this
        }

        var _mapCacheSet = mapCacheSet

        /**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
        function MapCache (entries) {
          var index = -1
          var length = entries == null ? 0 : entries.length

          this.clear()
          while (++index < length) {
            var entry = entries[index]
            this.set(entry[0], entry[1])
          }
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = _mapCacheClear
        MapCache.prototype['delete'] = _mapCacheDelete
        MapCache.prototype.get = _mapCacheGet
        MapCache.prototype.has = _mapCacheHas
        MapCache.prototype.set = _mapCacheSet

        var _MapCache = MapCache

        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200

        /**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
        function stackSet (key, value) {
          var data = this.__data__
          if (data instanceof _ListCache) {
            var pairs = data.__data__
            if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
              pairs.push([key, value])
              this.size = ++data.size
              return this
            }
            data = this.__data__ = new _MapCache(pairs)
          }
          data.set(key, value)
          this.size = data.size
          return this
        }

        var _stackSet = stackSet

        /**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
        function Stack (entries) {
          var data = this.__data__ = new _ListCache(entries)
          this.size = data.size
        }

        // Add methods to `Stack`.
        Stack.prototype.clear = _stackClear
        Stack.prototype['delete'] = _stackDelete
        Stack.prototype.get = _stackGet
        Stack.prototype.has = _stackHas
        Stack.prototype.set = _stackSet

        var _Stack = Stack

        var defineProperty = (function () {
          try {
            var func = _getNative(Object, 'defineProperty')
            func({}, '', {})
            return func
          } catch (e) {}
        }())

        var _defineProperty$1 = defineProperty

        /**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
        function baseAssignValue (object, key, value) {
          if (key == '__proto__' && _defineProperty$1) {
            _defineProperty$1(object, key, {
              'configurable': true,
              'enumerable': true,
              'value': value,
              'writable': true
            })
          } else {
            object[key] = value
          }
        }

        var _baseAssignValue = baseAssignValue

        /**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
        function assignMergeValue (object, key, value) {
          if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
            _baseAssignValue(object, key, value)
          }
        }

        var _assignMergeValue = assignMergeValue

        /**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
        function createBaseFor (fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1
            var iterable = Object(object)
            var props = keysFunc(object)
            var length = props.length

            while (length--) {
              var key = props[fromRight ? length : ++index]
              if (iteratee(iterable[key], key, iterable) === false) {
                break
              }
            }
            return object
          }
        }

        var _createBaseFor = createBaseFor

        /**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
        var baseFor = _createBaseFor()

        var _baseFor = baseFor

        var _cloneBuffer = createCommonjsModule(function (module, exports) {
          /** Detect free variable `exports`. */
          var freeExports = exports && !exports.nodeType && exports

          /** Detect free variable `module`. */
          var freeModule = freeExports && 'object' === 'object' && module && !module.nodeType && module

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports

          /** Built-in value references. */
          var Buffer = moduleExports ? _root.Buffer : undefined
          var allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined

          /**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
          function cloneBuffer (buffer, isDeep) {
            if (isDeep) {
              return buffer.slice()
            }
            var length = buffer.length
            var result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length)

            buffer.copy(result)
            return result
          }

          module.exports = cloneBuffer
        })

        /** Built-in value references. */
        var Uint8Array = _root.Uint8Array

        var _Uint8Array = Uint8Array

        /**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
        function cloneArrayBuffer (arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength)
          new _Uint8Array(result).set(new _Uint8Array(arrayBuffer))
          return result
        }

        var _cloneArrayBuffer = cloneArrayBuffer

        /**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
        function cloneTypedArray (typedArray, isDeep) {
          var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length)
        }

        var _cloneTypedArray = cloneTypedArray

        /**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
        function copyArray (source, array) {
          var index = -1
          var length = source.length

          array || (array = Array(length))
          while (++index < length) {
            array[index] = source[index]
          }
          return array
        }

        var _copyArray = copyArray

        /** Built-in value references. */
        var objectCreate = Object.create

        /**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
        var baseCreate = (function () {
          function object () {}
          return function (proto) {
            if (!isObject_1(proto)) {
              return {}
            }
            if (objectCreate) {
              return objectCreate(proto)
            }
            object.prototype = proto
            var result = new object()
            object.prototype = undefined
            return result
          }
        }())

        var _baseCreate = baseCreate

        /**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
        function overArg (func, transform) {
          return function (arg) {
            return func(transform(arg))
          }
        }

        var _overArg = overArg

        /** Built-in value references. */
        var getPrototype = _overArg(Object.getPrototypeOf, Object)

        var _getPrototype = getPrototype

        /** Used for built-in method references. */
        var objectProto$5 = Object.prototype

        /**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
        function isPrototype (value) {
          var Ctor = value && value.constructor
          var proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto$5

          return value === proto
        }

        var _isPrototype = isPrototype

        /**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
        function initCloneObject (object) {
          return (typeof object.constructor === 'function' && !_isPrototype(object))
            ? _baseCreate(_getPrototype(object))
            : {}
        }

        var _initCloneObject = initCloneObject

        /**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
        function isObjectLike (value) {
          return value != null && typeof value === 'object'
        }

        var isObjectLike_1 = isObjectLike

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]'

        /**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
        function baseIsArguments (value) {
          return isObjectLike_1(value) && _baseGetTag(value) == argsTag
        }

        var _baseIsArguments = baseIsArguments

        /** Used for built-in method references. */
        var objectProto$6 = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$4 = objectProto$6.hasOwnProperty

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto$6.propertyIsEnumerable

        /**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
        var isArguments = _baseIsArguments(function () { return arguments }()) ? _baseIsArguments : function (value) {
          return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee')
        }

        var isArguments_1 = isArguments

        /**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
        var isArray = Array.isArray

        var isArray_1 = isArray

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991

        /**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
        function isLength (value) {
          return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
        }

        var isLength_1 = isLength

        /**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
        function isArrayLike (value) {
          return value != null && isLength_1(value.length) && !isFunction_1(value)
        }

        var isArrayLike_1 = isArrayLike

        /**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
        function isArrayLikeObject (value) {
          return isObjectLike_1(value) && isArrayLike_1(value)
        }

        var isArrayLikeObject_1 = isArrayLikeObject

        /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
        function stubFalse () {
          return false
        }

        var stubFalse_1 = stubFalse

        var isBuffer_1 = createCommonjsModule(function (module, exports) {
          /** Detect free variable `exports`. */
          var freeExports = exports && !exports.nodeType && exports

          /** Detect free variable `module`. */
          var freeModule = freeExports && 'object' === 'object' && module && !module.nodeType && module

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports

          /** Built-in value references. */
          var Buffer = moduleExports ? _root.Buffer : undefined

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

          /**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
          var isBuffer = nativeIsBuffer || stubFalse_1

          module.exports = isBuffer
        })

        /** `Object#toString` result references. */
        var objectTag = '[object Object]'

        /** Used for built-in method references. */
        var funcProto$2 = Function.prototype
        var objectProto$7 = Object.prototype

        /** Used to resolve the decompiled source of functions. */
        var funcToString$2 = funcProto$2.toString

        /** Used to check objects for own properties. */
        var hasOwnProperty$5 = objectProto$7.hasOwnProperty

        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString$2.call(Object)

        /**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
        function isPlainObject (value) {
          if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
            return false
          }
          var proto = _getPrototype(value)
          if (proto === null) {
            return true
          }
          var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor
          return typeof Ctor === 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString
        }

        var isPlainObject_1 = isPlainObject

        /** `Object#toString` result references. */
        var argsTag$1 = '[object Arguments]'
        var arrayTag = '[object Array]'
        var boolTag = '[object Boolean]'
        var dateTag = '[object Date]'
        var errorTag = '[object Error]'
        var funcTag$1 = '[object Function]'
        var mapTag = '[object Map]'
        var numberTag = '[object Number]'
        var objectTag$1 = '[object Object]'
        var regexpTag = '[object RegExp]'
        var setTag = '[object Set]'
        var stringTag = '[object String]'
        var weakMapTag = '[object WeakMap]'

        var arrayBufferTag = '[object ArrayBuffer]'
        var dataViewTag = '[object DataView]'
        var float32Tag = '[object Float32Array]'
        var float64Tag = '[object Float64Array]'
        var int8Tag = '[object Int8Array]'
        var int16Tag = '[object Int16Array]'
        var int32Tag = '[object Int32Array]'
        var uint8Tag = '[object Uint8Array]'
        var uint8ClampedTag = '[object Uint8ClampedArray]'
        var uint16Tag = '[object Uint16Array]'
        var uint32Tag = '[object Uint32Array]'

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {}
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true
        typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false

        /**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
        function baseIsTypedArray (value) {
          return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)]
        }

        var _baseIsTypedArray = baseIsTypedArray

        /**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
        function baseUnary (func) {
          return function (value) {
            return func(value)
          }
        }

        var _baseUnary = baseUnary

        var _nodeUtil = createCommonjsModule(function (module, exports) {
          /** Detect free variable `exports`. */
          var freeExports = exports && !exports.nodeType && exports

          /** Detect free variable `module`. */
          var freeModule = freeExports && 'object' === 'object' && module && !module.nodeType && module

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports

          /** Detect free variable `process` from Node.js. */
          var freeProcess = moduleExports && _freeGlobal.process

          /** Used to access faster Node.js helpers. */
          var nodeUtil = (function () {
            try {
              // Use `util.types` for Node.js 10+.
              var types = freeModule && freeModule.require && freeModule.require('util').types

              if (types) {
                return types
              }

              // Legacy `process.binding('util')` for Node.js < 10.
              return freeProcess && freeProcess.binding && freeProcess.binding('util')
            } catch (e) {}
          }())

          module.exports = nodeUtil
        })

        /* Node.js helper references. */
        var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray

        /**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
        var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray

        var isTypedArray_1 = isTypedArray

        /**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
        function safeGet (object, key) {
          if (key == '__proto__') {
            return
          }

          return object[key]
        }

        var _safeGet = safeGet

        /** Used for built-in method references. */
        var objectProto$8 = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$6 = objectProto$8.hasOwnProperty

        /**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
        function assignValue (object, key, value) {
          var objValue = object[key]
          if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
            _baseAssignValue(object, key, value)
          }
        }

        var _assignValue = assignValue

        /**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
        function copyObject (source, props, object, customizer) {
          var isNew = !object
          object || (object = {})

          var index = -1
          var length = props.length

          while (++index < length) {
            var key = props[index]

            var newValue = customizer
              ? customizer(object[key], source[key], key, object, source)
              : undefined

            if (newValue === undefined) {
              newValue = source[key]
            }
            if (isNew) {
              _baseAssignValue(object, key, newValue)
            } else {
              _assignValue(object, key, newValue)
            }
          }
          return object
        }

        var _copyObject = copyObject

        /**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
        function baseTimes (n, iteratee) {
          var index = -1
          var result = Array(n)

          while (++index < n) {
            result[index] = iteratee(index)
          }
          return result
        }

        var _baseTimes = baseTimes

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER$1 = 9007199254740991

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/

        /**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
        function isIndex (value, length) {
          var type = typeof value
          length = length == null ? MAX_SAFE_INTEGER$1 : length

          return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length)
        }

        var _isIndex = isIndex

        /** Used for built-in method references. */
        var objectProto$9 = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$7 = objectProto$9.hasOwnProperty

        /**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
        function arrayLikeKeys (value, inherited) {
          var isArr = isArray_1(value)
          var isArg = !isArr && isArguments_1(value)
          var isBuff = !isArr && !isArg && isBuffer_1(value)
          var isType = !isArr && !isArg && !isBuff && isTypedArray_1(value)
          var skipIndexes = isArr || isArg || isBuff || isType
          var result = skipIndexes ? _baseTimes(value.length, String) : []
          var length = result.length

          for (var key in value) {
            if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
          key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
              result.push(key)
            }
          }
          return result
        }

        var _arrayLikeKeys = arrayLikeKeys

        /**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
        function nativeKeysIn (object) {
          var result = []
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key)
            }
          }
          return result
        }

        var _nativeKeysIn = nativeKeysIn

        /** Used for built-in method references. */
        var objectProto$a = Object.prototype

        /** Used to check objects for own properties. */
        var hasOwnProperty$8 = objectProto$a.hasOwnProperty

        /**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
        function baseKeysIn (object) {
          if (!isObject_1(object)) {
            return _nativeKeysIn(object)
          }
          var isProto = _isPrototype(object)
          var result = []

          for (var key in object) {
            if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
              result.push(key)
            }
          }
          return result
        }

        var _baseKeysIn = baseKeysIn

        /**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
        function keysIn (object) {
          return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object)
        }

        var keysIn_1 = keysIn

        /**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
        function toPlainObject (value) {
          return _copyObject(value, keysIn_1(value))
        }

        var toPlainObject_1 = toPlainObject

        /**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
        function baseMergeDeep (object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = _safeGet(object, key)
          var srcValue = _safeGet(source, key)
          var stacked = stack.get(srcValue)

          if (stacked) {
            _assignMergeValue(object, key, stacked)
            return
          }
          var newValue = customizer
            ? customizer(objValue, srcValue, (key + ''), object, source, stack)
            : undefined

          var isCommon = newValue === undefined

          if (isCommon) {
            var isArr = isArray_1(srcValue)
            var isBuff = !isArr && isBuffer_1(srcValue)
            var isTyped = !isArr && !isBuff && isTypedArray_1(srcValue)

            newValue = srcValue
            if (isArr || isBuff || isTyped) {
              if (isArray_1(objValue)) {
                newValue = objValue
              } else if (isArrayLikeObject_1(objValue)) {
                newValue = _copyArray(objValue)
              } else if (isBuff) {
                isCommon = false
                newValue = _cloneBuffer(srcValue, true)
              } else if (isTyped) {
                isCommon = false
                newValue = _cloneTypedArray(srcValue, true)
              } else {
                newValue = []
              }
            } else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
              newValue = objValue
              if (isArguments_1(objValue)) {
                newValue = toPlainObject_1(objValue)
              } else if (!isObject_1(objValue) || isFunction_1(objValue)) {
                newValue = _initCloneObject(srcValue)
              }
            } else {
              isCommon = false
            }
          }
          if (isCommon) {
            // Recursively merge objects and arrays (susceptible to call stack limits).
            stack.set(srcValue, newValue)
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack)
            stack['delete'](srcValue)
          }
          _assignMergeValue(object, key, newValue)
        }

        var _baseMergeDeep = baseMergeDeep

        /**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
        function baseMerge (object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return
          }
          _baseFor(source, function (srcValue, key) {
            if (isObject_1(srcValue)) {
              stack || (stack = new _Stack())
              _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack)
            } else {
              var newValue = customizer
                ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
                : undefined

              if (newValue === undefined) {
                newValue = srcValue
              }
              _assignMergeValue(object, key, newValue)
            }
          }, keysIn_1)
        }

        var _baseMerge = baseMerge

        /**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
        function identity (value) {
          return value
        }

        var identity_1 = identity

        /**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
        function apply (func, thisArg, args) {
          switch (args.length) {
            case 0: return func.call(thisArg)
            case 1: return func.call(thisArg, args[0])
            case 2: return func.call(thisArg, args[0], args[1])
            case 3: return func.call(thisArg, args[0], args[1], args[2])
          }
          return func.apply(thisArg, args)
        }

        var _apply = apply

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max

        /**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
        function overRest (func, start, transform) {
          start = nativeMax(start === undefined ? (func.length - 1) : start, 0)
          return function () {
            var args = arguments
            var index = -1
            var length = nativeMax(args.length - start, 0)
            var array = Array(length)

            while (++index < length) {
              array[index] = args[start + index]
            }
            index = -1
            var otherArgs = Array(start + 1)
            while (++index < start) {
              otherArgs[index] = args[index]
            }
            otherArgs[start] = transform(array)
            return _apply(func, this, otherArgs)
          }
        }

        var _overRest = overRest

        /**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
        function constant (value) {
          return function () {
            return value
          }
        }

        var constant_1 = constant

        /**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
        var baseSetToString = !_defineProperty$1 ? identity_1 : function (func, string) {
          return _defineProperty$1(func, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant_1(string),
            'writable': true
          })
        }

        var _baseSetToString = baseSetToString

        /** Used to detect hot functions by number of calls within a span of milliseconds. */
        var HOT_COUNT = 800
        var HOT_SPAN = 16

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeNow = Date.now

        /**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
        function shortOut (func) {
          var count = 0
          var lastCalled = 0

          return function () {
            var stamp = nativeNow()
            var remaining = HOT_SPAN - (stamp - lastCalled)

            lastCalled = stamp
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0]
              }
            } else {
              count = 0
            }
            return func.apply(undefined, arguments)
          }
        }

        var _shortOut = shortOut

        /**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
        var setToString = _shortOut(_baseSetToString)

        var _setToString = setToString

        /**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
        function baseRest (func, start) {
          return _setToString(_overRest(func, start, identity_1), func + '')
        }

        var _baseRest = baseRest

        /**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
        function isIterateeCall (value, index, object) {
          if (!isObject_1(object)) {
            return false
          }
          var type = typeof index
          if (type == 'number'
            ? (isArrayLike_1(object) && _isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
            return eq_1(object[index], value)
          }
          return false
        }

        var _isIterateeCall = isIterateeCall

        /**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
        function createAssigner (assigner) {
          return _baseRest(function (object, sources) {
            var index = -1
            var length = sources.length
            var customizer = length > 1 ? sources[length - 1] : undefined
            var guard = length > 2 ? sources[2] : undefined

            customizer = (assigner.length > 3 && typeof customizer === 'function')
              ? (length--, customizer)
              : undefined

            if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer
              length = 1
            }
            object = Object(object)
            while (++index < length) {
              var source = sources[index]
              if (source) {
                assigner(object, source, index, customizer)
              }
            }
            return object
          })
        }

        var _createAssigner = createAssigner

        /**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
        var merge = _createAssigner(function (object, source, srcIndex) {
          _baseMerge(object, source, srcIndex)
        })

        var merge_1 = merge

        function styleInject (css, ref) {
          if (ref === void 0) ref = {}
          var insertAt = ref.insertAt

          if (!css || typeof document === 'undefined') { return }

          var head = document.head || document.getElementsByTagName('head')[0]
          var style = document.createElement('style')
          style.type = 'text/css'

          if (insertAt === 'top') {
            if (head.firstChild) {
              head.insertBefore(style, head.firstChild)
            } else {
              head.appendChild(style)
            }
          } else {
            head.appendChild(style)
          }

          if (style.styleSheet) {
            style.styleSheet.cssText = css
          } else {
            style.appendChild(document.createTextNode(css))
          }
        }

        var css = '.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}'
        styleInject(css)

        function install (Vue) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
          if (install.installed) return
          install.installed = true
          var finalOptions = {}
          merge_1(finalOptions, defaultOptions, options)
          plugin.options = finalOptions
          directive.options = finalOptions
          Vue.directive('tooltip', directive)
          Vue.directive('close-popover', vclosepopover)
          Vue.component('v-popover', Popover)
        }
        var VTooltip = directive
        var VClosePopover = vclosepopover
        var VPopover = Popover
        var plugin = {
          install: install,

          get enabled () {
            return state.enabled
          },

          set enabled (value) {
            state.enabled = value
          }

        } // Auto-install

        var GlobalVue = null

        if (typeof window !== 'undefined') {
          GlobalVue = window.Vue
        } else if (typeof global !== 'undefined') {
          GlobalVue = global.Vue
        }

        if (GlobalVue) {
          GlobalVue.use(plugin)
        }

        /* harmony default export */ __webpack_exports__['a'] = (plugin)
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
      /***/ },

    /***/ 'e4ae':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('f772')
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!')
        return it
      }
      /***/ },

    /***/ 'e53d':
    /***/ function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')()
      if (typeof __g === 'number') __g = global // eslint-disable-line no-undef
      /***/ },

    /***/ 'e6f3':
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('07e3')
      var toIObject = __webpack_require__('36c3')
      var arrayIndexOf = __webpack_require__('5b4e')(false)
      var IE_PROTO = __webpack_require__('5559')('IE_PROTO')

      module.exports = function (object, names) {
        var O = toIObject(object)
        var i = 0
        var result = []
        var key
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key)
          }
        }
        return result
      }
      /***/ },

    /***/ 'e853':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var isArray = __webpack_require__('1169')
      var SPECIES = __webpack_require__('2b4c')('species')

      module.exports = function (original) {
        var C
        if (isArray(original)) {
          C = original.constructor
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined
          if (isObject(C)) {
            C = C[SPECIES]
            if (C === null) C = undefined
          }
        } return C === undefined ? Array : C
      }
      /***/ },

    /***/ 'ebfd':
    /***/ function (module, exports, __webpack_require__) {
      var META = __webpack_require__('62a0')('meta')
      var isObject = __webpack_require__('f772')
      var has = __webpack_require__('07e3')
      var setDesc = __webpack_require__('d9f6').f
      var id = 0
      var isExtensible = Object.isExtensible || function () {
        return true
      }
      var FREEZE = !__webpack_require__('294c')(function () {
        return isExtensible(Object.preventExtensions({}))
      })
      var setMeta = function (it) {
        setDesc(it, META, { value: {
          i: 'O' + ++id, // object ID
          w: {} // weak collections IDs
        } })
      }
      var fastKey = function (it, create) {
        // return primitive with prefix
        if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'
          // not necessary to add metadata
          if (!create) return 'E'
          // add missing metadata
          setMeta(it)
          // return object ID
        } return it[META].i
      }
      var getWeak = function (it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true
          // not necessary to add metadata
          if (!create) return false
          // add missing metadata
          setMeta(it)
          // return hash weak collections IDs
        } return it[META].w
      }
      // add metadata on freeze-family methods calling
      var onFreeze = function (it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it)
        return it
      }
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      }
      /***/ },

    /***/ 'ed33':
    /***/ function (module, exports, __webpack_require__) {
      __webpack_require__('014b')
      module.exports = __webpack_require__('584a').Object.getOwnPropertySymbols
      /***/ },

    /***/ 'f0bd':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* WEBPACK VAR INJECTION */(function (global) { /** !
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
        var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

        var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox']
        var timeoutDuration = 0
        for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
          if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            timeoutDuration = 1
            break
          }
        }

        function microtaskDebounce (fn) {
          var called = false
          return function () {
            if (called) {
              return
            }
            called = true
            window.Promise.resolve().then(function () {
              called = false
              fn()
            })
          }
        }

        function taskDebounce (fn) {
          var scheduled = false
          return function () {
            if (!scheduled) {
              scheduled = true
              setTimeout(function () {
                scheduled = false
                fn()
              }, timeoutDuration)
            }
          }
        }

        var supportsMicroTasks = isBrowser && window.Promise

        /**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
        var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce

        /**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
        function isFunction (functionToCheck) {
          var getType = {}
          return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
        }

        /**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
        function getStyleComputedProperty (element, property) {
          if (element.nodeType !== 1) {
            return []
          }
          // NOTE: 1 DOM access here
          var window = element.ownerDocument.defaultView
          var css = window.getComputedStyle(element, null)
          return property ? css[property] : css
        }

        /**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
        function getParentNode (element) {
          if (element.nodeName === 'HTML') {
            return element
          }
          return element.parentNode || element.host
        }

        /**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
        function getScrollParent (element) {
          // Return body, `getScroll` will take care to get the correct `scrollTop` from it
          if (!element) {
            return document.body
          }

          switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
              return element.ownerDocument.body
            case '#document':
              return element.body
          }

          // Firefox want us to check `-x` and `-y` variations as well

          var _getStyleComputedProp = getStyleComputedProperty(element)
          var overflow = _getStyleComputedProp.overflow
          var overflowX = _getStyleComputedProp.overflowX
          var overflowY = _getStyleComputedProp.overflowY

          if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
            return element
          }

          return getScrollParent(getParentNode(element))
        }

        var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode)
        var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent)

        /**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
        function isIE (version) {
          if (version === 11) {
            return isIE11
          }
          if (version === 10) {
            return isIE10
          }
          return isIE11 || isIE10
        }

        /**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
        function getOffsetParent (element) {
          if (!element) {
            return document.documentElement
          }

          var noOffsetParent = isIE(10) ? document.body : null

          // NOTE: 1 DOM access here
          var offsetParent = element.offsetParent || null
          // Skip hidden elements which don't have an offsetParent
          while (offsetParent === noOffsetParent && element.nextElementSibling) {
            offsetParent = (element = element.nextElementSibling).offsetParent
          }

          var nodeName = offsetParent && offsetParent.nodeName

          if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            return element ? element.ownerDocument.documentElement : document.documentElement
          }

          // .offsetParent will return the closest TH, TD or TABLE in case
          // no offsetParent is present, I hate this job...
          if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
            return getOffsetParent(offsetParent)
          }

          return offsetParent
        }

        function isOffsetContainer (element) {
          var nodeName = element.nodeName

          if (nodeName === 'BODY') {
            return false
          }
          return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element
        }

        /**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
        function getRoot (node) {
          if (node.parentNode !== null) {
            return getRoot(node.parentNode)
          }

          return node
        }

        /**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
        function findCommonOffsetParent (element1, element2) {
          // This check is needed to avoid errors in case one of the elements isn't defined for any reason
          if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement
          }

          // Here we make sure to give as "start" the element that comes first in the DOM
          var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING
          var start = order ? element1 : element2
          var end = order ? element2 : element1

          // Get common ancestor container
          var range = document.createRange()
          range.setStart(start, 0)
          range.setEnd(end, 0)
          var commonAncestorContainer = range.commonAncestorContainer

          // Both nodes are inside #document

          if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
              return commonAncestorContainer
            }

            return getOffsetParent(commonAncestorContainer)
          }

          // one of the nodes is inside shadowDOM, find which one
          var element1root = getRoot(element1)
          if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2)
          } else {
            return findCommonOffsetParent(element1, getRoot(element2).host)
          }
        }

        /**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
        function getScroll (element) {
          var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top'

          var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft'
          var nodeName = element.nodeName

          if (nodeName === 'BODY' || nodeName === 'HTML') {
            var html = element.ownerDocument.documentElement
            var scrollingElement = element.ownerDocument.scrollingElement || html
            return scrollingElement[upperSide]
          }

          return element[upperSide]
        }

        /*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
        function includeScroll (rect, element) {
          var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

          var scrollTop = getScroll(element, 'top')
          var scrollLeft = getScroll(element, 'left')
          var modifier = subtract ? -1 : 1
          rect.top += scrollTop * modifier
          rect.bottom += scrollTop * modifier
          rect.left += scrollLeft * modifier
          rect.right += scrollLeft * modifier
          return rect
        }

        /*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

        function getBordersSize (styles, axis) {
          var sideA = axis === 'x' ? 'Left' : 'Top'
          var sideB = sideA === 'Left' ? 'Right' : 'Bottom'

          return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10)
        }

        function getSize (axis, body, html, computedStyle) {
          return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0)
        }

        function getWindowSizes (document) {
          var body = document.body
          var html = document.documentElement
          var computedStyle = isIE(10) && getComputedStyle(html)

          return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle)
          }
        }

        var classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        var createClass = (function () {
          function defineProperties (target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps)
            if (staticProps) defineProperties(Constructor, staticProps)
            return Constructor
          }
        }())

        var defineProperty = function (obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }

          return target
        }

        /**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
        function getClientRect (offsets) {
          return _extends({}, offsets, {
            right: offsets.left + offsets.width,
            bottom: offsets.top + offsets.height
          })
        }

        /**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
        function getBoundingClientRect (element) {
          var rect = {}

          // IE10 10 FIX: Please, don't ask, the element isn't
          // considered in DOM in some circumstances...
          // This isn't reproducible in IE10 compatibility mode of IE11
          try {
            if (isIE(10)) {
              rect = element.getBoundingClientRect()
              var scrollTop = getScroll(element, 'top')
              var scrollLeft = getScroll(element, 'left')
              rect.top += scrollTop
              rect.left += scrollLeft
              rect.bottom += scrollTop
              rect.right += scrollLeft
            } else {
              rect = element.getBoundingClientRect()
            }
          } catch (e) {}

          var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
          }

          // subtract scrollbar size from sizes
          var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {}
          var width = sizes.width || element.clientWidth || result.right - result.left
          var height = sizes.height || element.clientHeight || result.bottom - result.top

          var horizScrollbar = element.offsetWidth - width
          var vertScrollbar = element.offsetHeight - height

          // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
          // we make this check conditional for performance reasons
          if (horizScrollbar || vertScrollbar) {
            var styles = getStyleComputedProperty(element)
            horizScrollbar -= getBordersSize(styles, 'x')
            vertScrollbar -= getBordersSize(styles, 'y')

            result.width -= horizScrollbar
            result.height -= vertScrollbar
          }

          return getClientRect(result)
        }

        function getOffsetRectRelativeToArbitraryNode (children, parent) {
          var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

          var isIE10 = isIE(10)
          var isHTML = parent.nodeName === 'HTML'
          var childrenRect = getBoundingClientRect(children)
          var parentRect = getBoundingClientRect(parent)
          var scrollParent = getScrollParent(children)

          var styles = getStyleComputedProperty(parent)
          var borderTopWidth = parseFloat(styles.borderTopWidth, 10)
          var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10)

          // In cases where the parent is fixed, we must ignore negative scroll in offset calc
          if (fixedPosition && isHTML) {
            parentRect.top = Math.max(parentRect.top, 0)
            parentRect.left = Math.max(parentRect.left, 0)
          }
          var offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
          })
          offsets.marginTop = 0
          offsets.marginLeft = 0

          // Subtract margins of documentElement in case it's being used as parent
          // we do this only on HTML because it's the only element that behaves
          // differently when margins are applied to it. The margins are included in
          // the box of the documentElement, in the other cases not.
          if (!isIE10 && isHTML) {
            var marginTop = parseFloat(styles.marginTop, 10)
            var marginLeft = parseFloat(styles.marginLeft, 10)

            offsets.top -= borderTopWidth - marginTop
            offsets.bottom -= borderTopWidth - marginTop
            offsets.left -= borderLeftWidth - marginLeft
            offsets.right -= borderLeftWidth - marginLeft

            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop
            offsets.marginLeft = marginLeft
          }

          if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
            offsets = includeScroll(offsets, parent)
          }

          return offsets
        }

        function getViewportOffsetRectRelativeToArtbitraryNode (element) {
          var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          var html = element.ownerDocument.documentElement
          var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html)
          var width = Math.max(html.clientWidth, window.innerWidth || 0)
          var height = Math.max(html.clientHeight, window.innerHeight || 0)

          var scrollTop = !excludeScroll ? getScroll(html) : 0
          var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0

          var offset = {
            top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
            left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
            width: width,
            height: height
          }

          return getClientRect(offset)
        }

        /**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
        function isFixed (element) {
          var nodeName = element.nodeName
          if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false
          }
          if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true
          }
          var parentNode = getParentNode(element)
          if (!parentNode) {
            return false
          }
          return isFixed(parentNode)
        }

        /**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

        function getFixedPositionOffsetParent (element) {
          // This check is needed to avoid errors in case one of the elements isn't defined for any reason
          if (!element || !element.parentElement || isIE()) {
            return document.documentElement
          }
          var el = element.parentElement
          while (el && getStyleComputedProperty(el, 'transform') === 'none') {
            el = el.parentElement
          }
          return el || document.documentElement
        }

        /**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
        function getBoundaries (popper, reference, padding, boundariesElement) {
          var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false

          // NOTE: 1 DOM access here

          var boundaries = { top: 0, left: 0 }
          var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference)

          // Handle viewport case
          if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition)
          } else {
            // Handle other cases based on DOM element used as boundaries
            var boundariesNode = void 0
            if (boundariesElement === 'scrollParent') {
              boundariesNode = getScrollParent(getParentNode(reference))
              if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement
              }
            } else if (boundariesElement === 'window') {
              boundariesNode = popper.ownerDocument.documentElement
            } else {
              boundariesNode = boundariesElement
            }

            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition)

            // In case of HTML, we need a different computation
            if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
              var _getWindowSizes = getWindowSizes(popper.ownerDocument)
              var height = _getWindowSizes.height
              var width = _getWindowSizes.width

              boundaries.top += offsets.top - offsets.marginTop
              boundaries.bottom = height + offsets.top
              boundaries.left += offsets.left - offsets.marginLeft
              boundaries.right = width + offsets.left
            } else {
              // for all the other DOM elements, this one is good
              boundaries = offsets
            }
          }

          // Add paddings
          padding = padding || 0
          var isPaddingNumber = typeof padding === 'number'
          boundaries.left += isPaddingNumber ? padding : padding.left || 0
          boundaries.top += isPaddingNumber ? padding : padding.top || 0
          boundaries.right -= isPaddingNumber ? padding : padding.right || 0
          boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0

          return boundaries
        }

        function getArea (_ref) {
          var width = _ref.width
          var height = _ref.height

          return width * height
        }

        /**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function computeAutoPlacement (placement, refRect, popper, reference, boundariesElement) {
          var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0

          if (placement.indexOf('auto') === -1) {
            return placement
          }

          var boundaries = getBoundaries(popper, reference, padding, boundariesElement)

          var rects = {
            top: {
              width: boundaries.width,
              height: refRect.top - boundaries.top
            },
            right: {
              width: boundaries.right - refRect.right,
              height: boundaries.height
            },
            bottom: {
              width: boundaries.width,
              height: boundaries.bottom - refRect.bottom
            },
            left: {
              width: refRect.left - boundaries.left,
              height: boundaries.height
            }
          }

          var sortedAreas = Object.keys(rects).map(function (key) {
            return _extends({
              key: key
            }, rects[key], {
              area: getArea(rects[key])
            })
          }).sort(function (a, b) {
            return b.area - a.area
          })

          var filteredAreas = sortedAreas.filter(function (_ref2) {
            var width = _ref2.width
            var height = _ref2.height
            return width >= popper.clientWidth && height >= popper.clientHeight
          })

          var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key

          var variation = placement.split('-')[1]

          return computedPlacement + (variation ? '-' + variation : '')
        }

        /**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
        function getReferenceOffsets (state, popper, reference) {
          var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null

          var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference)
          return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition)
        }

        /**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
        function getOuterSizes (element) {
          var window = element.ownerDocument.defaultView
          var styles = window.getComputedStyle(element)
          var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0)
          var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0)
          var result = {
            width: element.offsetWidth + y,
            height: element.offsetHeight + x
          }
          return result
        }

        /**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
        function getOppositePlacement (placement) {
          var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched]
          })
        }

        /**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
        function getPopperOffsets (popper, referenceOffsets, placement) {
          placement = placement.split('-')[0]

          // Get popper node sizes
          var popperRect = getOuterSizes(popper)

          // Add position, width and height to our offsets object
          var popperOffsets = {
            width: popperRect.width,
            height: popperRect.height
          }

          // depending by the popper placement we have to compute its offsets slightly differently
          var isHoriz = ['right', 'left'].indexOf(placement) !== -1
          var mainSide = isHoriz ? 'top' : 'left'
          var secondarySide = isHoriz ? 'left' : 'top'
          var measurement = isHoriz ? 'height' : 'width'
          var secondaryMeasurement = !isHoriz ? 'height' : 'width'

          popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2
          if (placement === secondarySide) {
            popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement]
          } else {
            popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)]
          }

          return popperOffsets
        }

        /**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
        function find (arr, check) {
          // use native find if supported
          if (Array.prototype.find) {
            return arr.find(check)
          }

          // use `filter` to obtain the same behavior of `find`
          return arr.filter(check)[0]
        }

        /**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
        function findIndex (arr, prop, value) {
          // use native findIndex if supported
          if (Array.prototype.findIndex) {
            return arr.findIndex(function (cur) {
              return cur[prop] === value
            })
          }

          // use `find` + `indexOf` if `findIndex` isn't supported
          var match = find(arr, function (obj) {
            return obj[prop] === value
          })
          return arr.indexOf(match)
        }

        /**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
        function runModifiers (modifiers, data, ends) {
          var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends))

          modifiersToRun.forEach(function (modifier) {
            if (modifier['function']) {
              // eslint-disable-line dot-notation
              console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
            }
            var fn = modifier['function'] || modifier.fn // eslint-disable-line dot-notation
            if (modifier.enabled && isFunction(fn)) {
              // Add properties to offsets to make them a complete clientRect object
              // we do this before each modifier to make sure the previous one doesn't
              // mess with these values
              data.offsets.popper = getClientRect(data.offsets.popper)
              data.offsets.reference = getClientRect(data.offsets.reference)

              data = fn(data, modifier)
            }
          })

          return data
        }

        /**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
        function update () {
          // if popper is destroyed, don't perform any further update
          if (this.state.isDestroyed) {
            return
          }

          var data = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: false,
            offsets: {}
          }

          // compute reference element offsets
          data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed)

          // compute auto placement, store placement inside the data object,
          // modifiers will be able to edit `placement` if needed
          // and refer to originalPlacement to know the original value
          data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)

          // store the computed placement inside `originalPlacement`
          data.originalPlacement = data.placement

          data.positionFixed = this.options.positionFixed

          // compute the popper offsets
          data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement)

          data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'

          // run the modifiers
          data = runModifiers(this.modifiers, data)

          // the first `update` will call `onCreate` callback
          // the other ones will call `onUpdate` callback
          if (!this.state.isCreated) {
            this.state.isCreated = true
            this.options.onCreate(data)
          } else {
            this.options.onUpdate(data)
          }
        }

        /**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
        function isModifierEnabled (modifiers, modifierName) {
          return modifiers.some(function (_ref) {
            var name = _ref.name
            var enabled = _ref.enabled
            return enabled && name === modifierName
          })
        }

        /**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
        function getSupportedPropertyName (property) {
          var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O']
          var upperProp = property.charAt(0).toUpperCase() + property.slice(1)

          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i]
            var toCheck = prefix ? '' + prefix + upperProp : property
            if (typeof document.body.style[toCheck] !== 'undefined') {
              return toCheck
            }
          }
          return null
        }

        /**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
        function destroy () {
          this.state.isDestroyed = true

          // touch DOM only if `applyStyle` modifier is enabled
          if (isModifierEnabled(this.modifiers, 'applyStyle')) {
            this.popper.removeAttribute('x-placement')
            this.popper.style.position = ''
            this.popper.style.top = ''
            this.popper.style.left = ''
            this.popper.style.right = ''
            this.popper.style.bottom = ''
            this.popper.style.willChange = ''
            this.popper.style[getSupportedPropertyName('transform')] = ''
          }

          this.disableEventListeners()

          // remove the popper if user explicity asked for the deletion on destroy
          // do not use `remove` because IE11 doesn't support it
          if (this.options.removeOnDestroy) {
            this.popper.parentNode.removeChild(this.popper)
          }
          return this
        }

        /**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
        function getWindow (element) {
          var ownerDocument = element.ownerDocument
          return ownerDocument ? ownerDocument.defaultView : window
        }

        function attachToScrollParents (scrollParent, event, callback, scrollParents) {
          var isBody = scrollParent.nodeName === 'BODY'
          var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent
          target.addEventListener(event, callback, { passive: true })

          if (!isBody) {
            attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents)
          }
          scrollParents.push(target)
        }

        /**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
        function setupEventListeners (reference, options, state, updateBound) {
          // Resize event listener on window
          state.updateBound = updateBound
          getWindow(reference).addEventListener('resize', state.updateBound, { passive: true })

          // Scroll event listener on scroll parents
          var scrollElement = getScrollParent(reference)
          attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents)
          state.scrollElement = scrollElement
          state.eventsEnabled = true

          return state
        }

        /**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
        function enableEventListeners () {
          if (!this.state.eventsEnabled) {
            this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate)
          }
        }

        /**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
        function removeEventListeners (reference, state) {
          // Remove resize event listener on window
          getWindow(reference).removeEventListener('resize', state.updateBound)

          // Remove scroll event listener on scroll parents
          state.scrollParents.forEach(function (target) {
            target.removeEventListener('scroll', state.updateBound)
          })

          // Reset state
          state.updateBound = null
          state.scrollParents = []
          state.scrollElement = null
          state.eventsEnabled = false
          return state
        }

        /**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
        function disableEventListeners () {
          if (this.state.eventsEnabled) {
            cancelAnimationFrame(this.scheduleUpdate)
            this.state = removeEventListeners(this.reference, this.state)
          }
        }

        /**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
        function isNumeric (n) {
          return n !== '' && !isNaN(parseFloat(n)) && isFinite(n)
        }

        /**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
        function setStyles (element, styles) {
          Object.keys(styles).forEach(function (prop) {
            var unit = ''
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
              unit = 'px'
            }
            element.style[prop] = styles[prop] + unit
          })
        }

        /**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
        function setAttributes (element, attributes) {
          Object.keys(attributes).forEach(function (prop) {
            var value = attributes[prop]
            if (value !== false) {
              element.setAttribute(prop, attributes[prop])
            } else {
              element.removeAttribute(prop)
            }
          })
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
        function applyStyle (data) {
          // any property present in `data.styles` will be applied to the popper,
          // in this way we can make the 3rd party modifiers add custom styles to it
          // Be aware, modifiers could override the properties defined in the previous
          // lines of this modifier!
          setStyles(data.instance.popper, data.styles)

          // any property present in `data.attributes` will be applied to the popper,
          // they will be set as HTML attributes of the element
          setAttributes(data.instance.popper, data.attributes)

          // if arrowElement is defined and arrowStyles has some properties
          if (data.arrowElement && Object.keys(data.arrowStyles).length) {
            setStyles(data.arrowElement, data.arrowStyles)
          }

          return data
        }

        /**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
        function applyStyleOnLoad (reference, popper, options, modifierOptions, state) {
          // compute reference element offsets
          var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed)

          // compute auto placement, store placement inside the data object,
          // modifiers will be able to edit `placement` if needed
          // and refer to originalPlacement to know the original value
          var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding)

          popper.setAttribute('x-placement', placement)

          // Apply `position` to popper before anything else because
          // without the position applied we can't guarantee correct computations
          setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' })

          return options
        }

        /**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
        function getRoundedOffsets (data, shouldRound) {
          var _data$offsets = data.offsets
          var popper = _data$offsets.popper
          var reference = _data$offsets.reference
          var round = Math.round
          var floor = Math.floor

          var noRound = function noRound (v) {
            return v
          }

          var referenceWidth = round(reference.width)
          var popperWidth = round(popper.width)

          var isVertical = ['left', 'right'].indexOf(data.placement) !== -1
          var isVariation = data.placement.indexOf('-') !== -1
          var sameWidthParity = referenceWidth % 2 === popperWidth % 2
          var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1

          var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor
          var verticalToInteger = !shouldRound ? noRound : round

          return {
            left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
            top: verticalToInteger(popper.top),
            bottom: verticalToInteger(popper.bottom),
            right: horizontalToInteger(popper.right)
          }
        }

        var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent)

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function computeStyle (data, options) {
          var x = options.x
          var y = options.y
          var popper = data.offsets.popper

          // Remove this legacy support in Popper.js v2

          var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'applyStyle'
          }).gpuAcceleration
          if (legacyGpuAccelerationOption !== undefined) {
            console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!')
          }
          var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration

          var offsetParent = getOffsetParent(data.instance.popper)
          var offsetParentRect = getBoundingClientRect(offsetParent)

          // Styles
          var styles = {
            position: popper.position
          }

          var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox)

          var sideA = x === 'bottom' ? 'top' : 'bottom'
          var sideB = y === 'right' ? 'left' : 'right'

          // if gpuAcceleration is set to `true` and transform is supported,
          //  we use `translate3d` to apply the position to the popper we
          // automatically use the supported prefixed version if needed
          var prefixedProperty = getSupportedPropertyName('transform')

          // now, let's make a step back and look at this code closely (wtf?)
          // If the content of the popper grows once it's been positioned, it
          // may happen that the popper gets misplaced because of the new content
          // overflowing its reference element
          // To avoid this problem, we provide two options (x and y), which allow
          // the consumer to define the offset origin.
          // If we position a popper on top of a reference element, we can set
          // `x` to `top` to make the popper grow towards its top instead of
          // its bottom.
          var left = void 0
          var top = void 0
          if (sideA === 'bottom') {
            // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
            // and not the bottom of the html element
            if (offsetParent.nodeName === 'HTML') {
              top = -offsetParent.clientHeight + offsets.bottom
            } else {
              top = -offsetParentRect.height + offsets.bottom
            }
          } else {
            top = offsets.top
          }
          if (sideB === 'right') {
            if (offsetParent.nodeName === 'HTML') {
              left = -offsetParent.clientWidth + offsets.right
            } else {
              left = -offsetParentRect.width + offsets.right
            }
          } else {
            left = offsets.left
          }
          if (gpuAcceleration && prefixedProperty) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)'
            styles[sideA] = 0
            styles[sideB] = 0
            styles.willChange = 'transform'
          } else {
            // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
            var invertTop = sideA === 'bottom' ? -1 : 1
            var invertLeft = sideB === 'right' ? -1 : 1
            styles[sideA] = top * invertTop
            styles[sideB] = left * invertLeft
            styles.willChange = sideA + ', ' + sideB
          }

          // Attributes
          var attributes = {
            'x-placement': data.placement
          }

          // Update `data` attributes, styles and arrowStyles
          data.attributes = _extends({}, attributes, data.attributes)
          data.styles = _extends({}, styles, data.styles)
          data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles)

          return data
        }

        /**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
        function isModifierRequired (modifiers, requestingName, requestedName) {
          var requesting = find(modifiers, function (_ref) {
            var name = _ref.name
            return name === requestingName
          })

          var isRequired = !!requesting && modifiers.some(function (modifier) {
            return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order
          })

          if (!isRequired) {
            var _requesting = '`' + requestingName + '`'
            var requested = '`' + requestedName + '`'
            console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!')
          }
          return isRequired
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function arrow (data, options) {
          var _data$offsets$arrow

          // arrow depends on keepTogether in order to work
          if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
            return data
          }

          var arrowElement = options.element

          // if arrowElement is a string, suppose it's a CSS selector
          if (typeof arrowElement === 'string') {
            arrowElement = data.instance.popper.querySelector(arrowElement)

            // if arrowElement is not found, don't run the modifier
            if (!arrowElement) {
              return data
            }
          } else {
            // if the arrowElement isn't a query selector we must check that the
            // provided DOM node is child of its popper node
            if (!data.instance.popper.contains(arrowElement)) {
              console.warn('WARNING: `arrow.element` must be child of its popper element!')
              return data
            }
          }

          var placement = data.placement.split('-')[0]
          var _data$offsets = data.offsets
          var popper = _data$offsets.popper
          var reference = _data$offsets.reference

          var isVertical = ['left', 'right'].indexOf(placement) !== -1

          var len = isVertical ? 'height' : 'width'
          var sideCapitalized = isVertical ? 'Top' : 'Left'
          var side = sideCapitalized.toLowerCase()
          var altSide = isVertical ? 'left' : 'top'
          var opSide = isVertical ? 'bottom' : 'right'
          var arrowElementSize = getOuterSizes(arrowElement)[len]

          //
          // extends keepTogether behavior making sure the popper and its
          // reference have enough pixels in conjunction
          //

          // top/left side
          if (reference[opSide] - arrowElementSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize)
          }
          // bottom/right side
          if (reference[side] + arrowElementSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide]
          }
          data.offsets.popper = getClientRect(data.offsets.popper)

          // compute center of the popper
          var center = reference[side] + reference[len] / 2 - arrowElementSize / 2

          // Compute the sideValue using the updated popper offsets
          // take popper margin in account because we don't have this info available
          var css = getStyleComputedProperty(data.instance.popper)
          var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10)
          var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10)
          var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide

          // prevent arrowElement from being placed not contiguously to its popper
          sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0)

          data.arrowElement = arrowElement
          data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow)

          return data
        }

        /**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
        function getOppositeVariation (variation) {
          if (variation === 'end') {
            return 'start'
          } else if (variation === 'start') {
            return 'end'
          }
          return variation
        }

        /**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
        var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']

        // Get rid of `auto` `auto-start` and `auto-end`
        var validPlacements = placements.slice(3)

        /**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
        function clockwise (placement) {
          var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

          var index = validPlacements.indexOf(placement)
          var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index))
          return counter ? arr.reverse() : arr
        }

        var BEHAVIORS = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise'
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function flip (data, options) {
          // if `inner` modifier is enabled, we can't use the `flip` modifier
          if (isModifierEnabled(data.instance.modifiers, 'inner')) {
            return data
          }

          if (data.flipped && data.placement === data.originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data
          }

          var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed)

          var placement = data.placement.split('-')[0]
          var placementOpposite = getOppositePlacement(placement)
          var variation = data.placement.split('-')[1] || ''

          var flipOrder = []

          switch (options.behavior) {
            case BEHAVIORS.FLIP:
              flipOrder = [placement, placementOpposite]
              break
            case BEHAVIORS.CLOCKWISE:
              flipOrder = clockwise(placement)
              break
            case BEHAVIORS.COUNTERCLOCKWISE:
              flipOrder = clockwise(placement, true)
              break
            default:
              flipOrder = options.behavior
          }

          flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
              return data
            }

            placement = data.placement.split('-')[0]
            placementOpposite = getOppositePlacement(placement)

            var popperOffsets = data.offsets.popper
            var refOffsets = data.offsets.reference

            // using floor because the reference offsets may contain decimals we are not going to consider here
            var floor = Math.floor
            var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom)

            var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left)
            var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right)
            var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top)
            var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom)

            var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom

            // flip the variation if required
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1

            // flips variation if reference element overflows boundaries
            var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom)

            // flips variation if popper content overflows boundaries
            var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop)

            var flippedVariation = flippedVariationByRef || flippedVariationByContent

            if (overlapsRef || overflowsBoundaries || flippedVariation) {
              // this boolean to detect any flip loop
              data.flipped = true

              if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1]
              }

              if (flippedVariation) {
                variation = getOppositeVariation(variation)
              }

              data.placement = placement + (variation ? '-' + variation : '')

              // this object contains `position`, we want to preserve it along with
              // any additional property we may add in the future
              data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement))

              data = runModifiers(data.instance.modifiers, data, 'flip')
            }
          })
          return data
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function keepTogether (data) {
          var _data$offsets = data.offsets
          var popper = _data$offsets.popper
          var reference = _data$offsets.reference

          var placement = data.placement.split('-')[0]
          var floor = Math.floor
          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1
          var side = isVertical ? 'right' : 'bottom'
          var opSide = isVertical ? 'left' : 'top'
          var measurement = isVertical ? 'width' : 'height'

          if (popper[side] < floor(reference[opSide])) {
            data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement]
          }
          if (popper[opSide] > floor(reference[side])) {
            data.offsets.popper[opSide] = floor(reference[side])
          }

          return data
        }

        /**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
        function toValue (str, measurement, popperOffsets, referenceOffsets) {
          // separate value from unit
          var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          var value = +split[1]
          var unit = split[2]

          // If it's not a number it's an operator, I guess
          if (!value) {
            return str
          }

          if (unit.indexOf('%') === 0) {
            var element = void 0
            switch (unit) {
              case '%p':
                element = popperOffsets
                break
              case '%':
              case '%r':
              default:
                element = referenceOffsets
            }

            var rect = getClientRect(element)
            return rect[measurement] / 100 * value
          } else if (unit === 'vh' || unit === 'vw') {
            // if is a vh or vw, we calculate the size based on the viewport
            var size = void 0
            if (unit === 'vh') {
              size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            } else {
              size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            }
            return size / 100 * value
          } else {
            // if is an explicit pixel unit, we get rid of the unit and keep the value
            // if is an implicit unit, it's px, and we return just the value
            return value
          }
        }

        /**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
        function parseOffset (offset, popperOffsets, referenceOffsets, basePlacement) {
          var offsets = [0, 0]

          // Use height if placement is left or right and index is 0 otherwise use width
          // in this way the first offset will use an axis and the second one
          // will use the other one
          var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1

          // Split the offset string to obtain a list of values and operands
          // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
          var fragments = offset.split(/(\+|\-)/).map(function (frag) {
            return frag.trim()
          })

          // Detect if the offset string contains a pair of values or a single one
          // they could be separated by comma or space
          var divider = fragments.indexOf(find(fragments, function (frag) {
            return frag.search(/,|\s/) !== -1
          }))

          if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
            console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.')
          }

          // If divider is found, we divide the list of values and operands to divide
          // them by ofset X and Y.
          var splitRegex = /\s*,\s*|\s+/
          var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]

          // Convert the values with units to absolute pixels to allow our computations
          ops = ops.map(function (op, index) {
            // Most of the units rely on the orientation of the popper
            var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width'
            var mergeWithPrevious = false
            return op
            // This aggregates any `+` or `-` sign that aren't considered operators
            // e.g.: 10 + +5 => [10, +, +5]
              .reduce(function (a, b) {
                if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                  a[a.length - 1] = b
                  mergeWithPrevious = true
                  return a
                } else if (mergeWithPrevious) {
                  a[a.length - 1] += b
                  mergeWithPrevious = false
                  return a
                } else {
                  return a.concat(b)
                }
              }, [])
            // Here we convert the string values into number values (in px)
              .map(function (str) {
                return toValue(str, measurement, popperOffsets, referenceOffsets)
              })
          })

          // Loop trough the offsets arrays and execute the operations
          ops.forEach(function (op, index) {
            op.forEach(function (frag, index2) {
              if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1)
              }
            })
          })
          return offsets
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
        function offset (data, _ref) {
          var offset = _ref.offset
          var placement = data.placement
          var _data$offsets = data.offsets
          var popper = _data$offsets.popper
          var reference = _data$offsets.reference

          var basePlacement = placement.split('-')[0]

          var offsets = void 0
          if (isNumeric(+offset)) {
            offsets = [+offset, 0]
          } else {
            offsets = parseOffset(offset, popper, reference, basePlacement)
          }

          if (basePlacement === 'left') {
            popper.top += offsets[0]
            popper.left -= offsets[1]
          } else if (basePlacement === 'right') {
            popper.top += offsets[0]
            popper.left += offsets[1]
          } else if (basePlacement === 'top') {
            popper.left += offsets[0]
            popper.top -= offsets[1]
          } else if (basePlacement === 'bottom') {
            popper.left += offsets[0]
            popper.top += offsets[1]
          }

          data.popper = popper
          return data
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function preventOverflow (data, options) {
          var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper)

          // If offsetParent is the reference element, we really want to
          // go one step up and use the next offsetParent as reference to
          // avoid to make this modifier completely useless and look like broken
          if (data.instance.reference === boundariesElement) {
            boundariesElement = getOffsetParent(boundariesElement)
          }

          // NOTE: DOM access here
          // resets the popper's position so that the document size can be calculated excluding
          // the size of the popper element itself
          var transformProp = getSupportedPropertyName('transform')
          var popperStyles = data.instance.popper.style // assignment to help minification
          var top = popperStyles.top
          var left = popperStyles.left
          var transform = popperStyles[transformProp]

          popperStyles.top = ''
          popperStyles.left = ''
          popperStyles[transformProp] = ''

          var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed)

          // NOTE: DOM access here
          // restores the original style properties after the offsets have been computed
          popperStyles.top = top
          popperStyles.left = left
          popperStyles[transformProp] = transform

          options.boundaries = boundaries

          var order = options.priority
          var popper = data.offsets.popper

          var check = {
            primary: function primary (placement) {
              var value = popper[placement]
              if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement])
              }
              return defineProperty({}, placement, value)
            },
            secondary: function secondary (placement) {
              var mainSide = placement === 'right' ? 'left' : 'top'
              var value = popper[mainSide]
              if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height))
              }
              return defineProperty({}, mainSide, value)
            }
          }

          order.forEach(function (placement) {
            var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary'
            popper = _extends({}, popper, check[side](placement))
          })

          data.offsets.popper = popper

          return data
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function shift (data) {
          var placement = data.placement
          var basePlacement = placement.split('-')[0]
          var shiftvariation = placement.split('-')[1]

          // if shift shiftvariation is specified, run the modifier
          if (shiftvariation) {
            var _data$offsets = data.offsets
            var reference = _data$offsets.reference
            var popper = _data$offsets.popper

            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1
            var side = isVertical ? 'left' : 'top'
            var measurement = isVertical ? 'width' : 'height'

            var shiftOffsets = {
              start: defineProperty({}, side, reference[side]),
              end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
            }

            data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation])
          }

          return data
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function hide (data) {
          if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
            return data
          }

          var refRect = data.offsets.reference
          var bound = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'preventOverflow'
          }).boundaries

          if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === true) {
              return data
            }

            data.hide = true
            data.attributes['x-out-of-boundaries'] = ''
          } else {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === false) {
              return data
            }

            data.hide = false
            data.attributes['x-out-of-boundaries'] = false
          }

          return data
        }

        /**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
        function inner (data) {
          var placement = data.placement
          var basePlacement = placement.split('-')[0]
          var _data$offsets = data.offsets
          var popper = _data$offsets.popper
          var reference = _data$offsets.reference

          var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1

          var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1

          popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0)

          data.placement = getOppositePlacement(placement)
          data.offsets.popper = getClientRect(popper)

          return data
        }

        /**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

        /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
        var modifiers = {
          /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
          shift: {
            /** @prop {number} order=100 - Index used to define the order of execution */
            order: 100,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: shift
          },

          /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
          offset: {
            /** @prop {number} order=200 - Index used to define the order of execution */
            order: 200,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: offset,
            /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
            offset: 0
          },

          /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
          preventOverflow: {
            /** @prop {number} order=300 - Index used to define the order of execution */
            order: 300,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: preventOverflow,
            /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
            priority: ['left', 'right', 'top', 'bottom'],
            /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
            padding: 5,
            /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
            boundariesElement: 'scrollParent'
          },

          /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
          keepTogether: {
            /** @prop {number} order=400 - Index used to define the order of execution */
            order: 400,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: keepTogether
          },

          /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
          arrow: {
            /** @prop {number} order=500 - Index used to define the order of execution */
            order: 500,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: arrow,
            /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
            element: '[x-arrow]'
          },

          /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
          flip: {
            /** @prop {number} order=600 - Index used to define the order of execution */
            order: 600,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: flip,
            /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
            behavior: 'flip',
            /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
            padding: 5,
            /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
            boundariesElement: 'viewport',
            /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
            flipVariations: false,
            /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
            flipVariationsByContent: false
          },

          /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
          inner: {
            /** @prop {number} order=700 - Index used to define the order of execution */
            order: 700,
            /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
            enabled: false,
            /** @prop {ModifierFn} */
            fn: inner
          },

          /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
          hide: {
            /** @prop {number} order=800 - Index used to define the order of execution */
            order: 800,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: hide
          },

          /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
          computeStyle: {
            /** @prop {number} order=850 - Index used to define the order of execution */
            order: 850,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: computeStyle,
            /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
            gpuAcceleration: true,
            /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
            x: 'bottom',
            /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
            y: 'right'
          },

          /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
          applyStyle: {
            /** @prop {number} order=900 - Index used to define the order of execution */
            order: 900,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: applyStyle,
            /** @prop {Function} */
            onLoad: applyStyleOnLoad,
            /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
            gpuAcceleration: undefined
          }
        }

        /**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

        /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
        var Defaults = {
          /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
          placement: 'bottom',

          /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
          positionFixed: false,

          /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
          eventsEnabled: true,

          /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
          removeOnDestroy: false,

          /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
          onCreate: function onCreate () {},

          /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
          onUpdate: function onUpdate () {},

          /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
          modifiers: modifiers
        }

        /**
 * @callback onCreate
 * @param {dataObject} data
 */

        /**
 * @callback onUpdate
 * @param {dataObject} data
 */

        // Utils
        // Methods
        var Popper = (function () {
          /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
          function Popper (reference, popper) {
            var _this = this

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
            classCallCheck(this, Popper)

            this.scheduleUpdate = function () {
              return requestAnimationFrame(_this.update)
            }

            // make update() debounced, so that it only runs at most once-per-tick
            this.update = debounce(this.update.bind(this))

            // with {} we create a new object with the options inside it
            this.options = _extends({}, Popper.Defaults, options)

            // init state
            this.state = {
              isDestroyed: false,
              isCreated: false,
              scrollParents: []
            }

            // get reference and popper elements (allow jQuery wrappers)
            this.reference = reference && reference.jquery ? reference[0] : reference
            this.popper = popper && popper.jquery ? popper[0] : popper

            // Deep merge modifiers options
            this.options.modifiers = {}
            Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
              _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {})
            })

            // Refactoring modifiers' list (Object => Array)
            this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
              return _extends({
                name: name
              }, _this.options.modifiers[name])
            })
            // sort the modifiers by order
              .sort(function (a, b) {
                return a.order - b.order
              })

            // modifiers have the ability to execute arbitrary code when Popper.js get inited
            // such code is executed in the same order of its modifier
            // they could add new properties to their options configuration
            // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
            this.modifiers.forEach(function (modifierOptions) {
              if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state)
              }
            })

            // fire the first update to position the popper in the right place
            this.update()

            var eventsEnabled = this.options.eventsEnabled
            if (eventsEnabled) {
              // setup event listeners, they will take care of update the position in specific situations
              this.enableEventListeners()
            }

            this.state.eventsEnabled = eventsEnabled
          }

          // We can't use class properties because they don't get listed in the
          // class prototype and break stuff like Sinon stubs

          createClass(Popper, [{
            key: 'update',
            value: function update$$1 () {
              return update.call(this)
            }
          }, {
            key: 'destroy',
            value: function destroy$$1 () {
              return destroy.call(this)
            }
          }, {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1 () {
              return enableEventListeners.call(this)
            }
          }, {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1 () {
              return disableEventListeners.call(this)
            }

            /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

            /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

          }])
          return Popper
        }())

        /**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

        Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils
        Popper.placements = placements
        Popper.Defaults = Defaults

        /* harmony default export */ __webpack_exports__['a'] = (Popper)
        // # sourceMappingURL=popper.js.map
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
      /***/ },

    /***/ 'f6fd':
    /***/ function (module, exports) {
      // document.currentScript polyfill by Adam Miller

      // MIT license

      (function (document) {
        var currentScript = 'currentScript'
        var scripts = document.getElementsByTagName('script') // Live NodeList collection

        // If browser needs currentScript polyfill, add get currentScript() to the document object
        if (!(currentScript in document)) {
          Object.defineProperty(document, currentScript, {
            get: function () {
              // IE 6-10 supports script readyState
              // IE 10+ support stack trace
              try { throw new Error() } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                // Specifically works with the format of stack traces in IE.
                var i; var res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1]

                // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                for (i in scripts) {
                  if (scripts[i].src == res || scripts[i].readyState == 'interactive') {
                    return scripts[i]
                  }
                }

                // If no match, return null
                return null
              }
            }
          })
        }
      })(document)
      /***/ },

    /***/ 'f772':
    /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }
      /***/ },

    /***/ 'fa5b':
    /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('5537')('native-function-to-string', Function.toString)
      /***/ },

    /***/ 'fab2':
    /***/ function (module, exports, __webpack_require__) {
      var document = __webpack_require__('7726').document
      module.exports = document && document.documentElement
      /***/ },

    /***/ 'fb15':
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        if (true) {
          __webpack_require__('f6fd')
        }

        var setPublicPath_i
        if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = (null)

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
      var es6_function_name = __webpack_require__('7f7f')

      // EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
      var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__('8bbf')
      var external_commonjs_vue_commonjs2_vue_root_Vue_default = /* #__PURE__ */__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_)

      // EXTERNAL MODULE: ./node_modules/v-tooltip/dist/v-tooltip.esm.js
      var v_tooltip_esm = __webpack_require__('e37d')

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0cb7f25e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/index.vue?vue&type=template&id=27538f2a&
      var viewsvue_type_template_id_27538f2a_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'calendar' }, [_c('div', { staticClass: 'calendar-header' }, [_c('div', { staticClass: 'calendar-year' }, [_c('span', { on: { 'click': function ($event) { return _vm.go(_vm.currentYear - 1, _vm.currentMonth) } } }, [_c('a', { staticClass: 'year-prev prev-icon', attrs: { 'href': 'javascript:' } })]), _c('a', { staticClass: 'calendar-year-txt calendar-title', attrs: { 'href': 'javascript:' } }, [_vm._v(_vm._s(_vm.currentYear || '--'))]), _c('span', { staticClass: 'calendar-header-right-arrow', on: { 'click': function ($event) { return _vm.go(_vm.currentYear + 1, _vm.currentMonth) } } }, [_c('a', { staticClass: 'year-next next-icon', attrs: { 'href': 'javascript:' } })])]), _c('div', { staticClass: 'calendar-month' }, [_c('span', { on: { 'click': _vm.prev } }, [_c('a', { staticClass: 'month-prev prev-icon', attrs: { 'href': 'javascript:' } })]), _c('a', { staticClass: 'calendar-month-txt calendar-title', attrs: { 'href': 'javascript:' } }, [_vm._v(_vm._s(_vm.currentMonth || '--'))]), _c('span', { staticClass: 'calendar-header-right-arrow', on: { 'click': _vm.next } }, [_c('a', { staticClass: 'month-next next-icon', attrs: { 'href': 'javascript:' } })])])]), _c('div', { staticClass: 'calendar-content' }, [_c('ul', { staticClass: 'calendar-label' }, _vm._l((_vm.tableHead), function (item, index) { return _c('li', { key: index }, [_vm._v(_vm._s(item.title))]) }), 0), _c('ul', { staticClass: 'calendar-num' }, [(_vm.empytGrids) ? _vm._l((_vm.empytGrids), function (item, index) { return _c('li', { key: 'empytGrids' + index }, [_c('span', { staticClass: 'gray' }, [_vm._v(_vm._s(item))])]) }) : _vm._e(), _vm._l((_vm.dateArr), function (item, index) { return _c('li', { key: index, on: { 'click': function ($event) { return _vm.tapDayItem(item) } } }, [(item.status) ? _c('v-popover', [_c('span', { class: item.choosed ? 'current' : '' }, [_vm._v(_vm._s(item.day))]), _c('template', { slot: 'popover' }, [_vm._v(_vm._s(item.msg))])], 2) : _c('span', { class: item.choosed ? 'current' : '' }, [_vm._v(_vm._s(item.day))])], 1) }), (_vm.lastEmptyGrids) ? _vm._l((_vm.lastEmptyGrids), function (item, index) { return _c('li', { key: 'lastEmptyGrids' + index }, [_c('span', { staticClass: 'gray' }, [_vm._v(_vm._s(item))])]) }) : _vm._e()], 2)])]) }
      var staticRenderFns = []

      // CONCATENATED MODULE: ./packages/views/index.vue?vue&type=template&id=27538f2a&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
      var es6_array_find = __webpack_require__('7514')

      // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
      var get_own_property_descriptor = __webpack_require__('268f')
      var get_own_property_descriptor_default = /* #__PURE__ */__webpack_require__.n(get_own_property_descriptor)

      // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
      var get_own_property_symbols = __webpack_require__('e265')
      var get_own_property_symbols_default = /* #__PURE__ */__webpack_require__.n(get_own_property_symbols)

      // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
      var keys = __webpack_require__('a4bb')
      var keys_default = /* #__PURE__ */__webpack_require__.n(keys)

      // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
      var define_property = __webpack_require__('85f2')
      var define_property_default = /* #__PURE__ */__webpack_require__.n(define_property)

      // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

      function _defineProperty (obj, key, value) {
        if (key in obj) {
          define_property_default()(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }

        return obj
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js

      function _objectSpread (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}

          var ownKeys = keys_default()(source)

          if (typeof get_own_property_symbols_default.a === 'function') {
            ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
              return get_own_property_descriptor_default()(source, sym).enumerable
            }))
          }

          ownKeys.forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        }

        return target
      }
      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
      var web_dom_iterable = __webpack_require__('ac6a')

      // EXTERNAL MODULE: ./node_modules/ittool/lib/ittool.min.js
      var ittool_min = __webpack_require__('9ff3')

      // CONCATENATED MODULE: ./packages/utils/utils.js
      // _.getDaysInMonth(2019, 2)

      /**
 * @desc 计算指定月份第一天星期几(0-6)
 * @param {Number} year 年份
 * @param {Number} month 月份
 */

      var getFirstDayOfWeek = function getFirstDayOfWeek (year, month) {
        year = +year
        month = +month
        return new Date(Date.UTC(year, month - 1, 1)).getDay()
      }
      /**
 * @desc 计算指定日期星期几(0-6)
 * @param {Number} year 年份
 * @param {Number} month 月份
 * @param {Number} date 日期
 */

      var getDayOfWeek = function getDayOfWeek (year, month, date) {
        year = +year
        month = +month
        date = +date
        return new Date(Date.UTC(year, month - 1, date)).getDay()
      }
      /**
 * @desc 生成空布局
 * @param {Number} year
 * @param {Number} month
 */

      var calculateEmptyGrids = function calculateEmptyGrids (year, month) {
        var firstDayOfWeek = getFirstDayOfWeek(year, month)
        var emptyGrids = []

        if (firstDayOfWeek > 0) {
          // 由于js的日期是从0算起,0:星期天,所以这里减去1
          // firstDayOfWeek = firstDayOfWeek - 1
          for (var i = 0; i < firstDayOfWeek; i++) {
            emptyGrids.push(i)
          }

          return {
            hasEmptyGrid: true,
            emptyGrids: emptyGrids
          }
        } else {
          return {
            hasEmptyGrid: false,
            emptyGrids: []
          }
        }
      }
      /**
 * https://github.com/treadpit/wx_calendar/blob/master/src/template/calendar/index.js
 * @desc 计算上月应占的格子
 * @param {Number} year
 * @param {Number} month
 */

      var utils_calculatePrevMonthGrids = function calculatePrevMonthGrids (year, month) {
        var emptyGrids = []
        var prevMonthDays = Object(ittool_min['getDaysInMonth'])(year, month - 1)
        var firstDayOfWeek = getFirstDayOfWeek(year, month)

        if (firstDayOfWeek > 0) {
          var len = prevMonthDays - firstDayOfWeek

          for (var i = prevMonthDays; i > len; i--) {
            emptyGrids.push(i)
          }

          return emptyGrids.reverse()
        } else {
          return null
        }
      }
      /**
 * @desc 计算下月应占的格子
 * @param {Number} year 年份
 * @param {Number} month 月份
 */

      var utils_calculateNextMonthGrids = function calculateNextMonthGrids (year, month) {
        var lastEmptyGrids = []
        var thisMonthDays = Object(ittool_min['getDaysInMonth'])(year, month)
        var lastDayOfWeek = getDayOfWeek(year, month, thisMonthDays)

        if (+lastDayOfWeek !== 6) {
          var len = 7 - (lastDayOfWeek + 1)

          for (var i = 1; i <= len; i++) {
            lastEmptyGrids.push(i)
          }

          return lastEmptyGrids
        } else {
          return null
        }
      }
      /**
 * @desc 设置日历面板数据
 * @param {Number} year 年份
 * @param {Number} month 月份
 */

      var utils_calculateDays = function calculateDays (year, month) {
        var days = []
        var thisMonthDays = Object(ittool_min['getDaysInMonth'])(year, month)

        for (var i = 1; i <= thisMonthDays; i++) {
          days.push({
            year: year,
            month: month,
            day: i,
            week: getDayOfWeek(year, month, i),
            choosed: false
          })
        }

        return days
      }
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/index.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var viewsvue_type_script_lang_js_ = ({
        name: 'calendar',
        data: function data () {
          return {
            dateArr: [],
            // 当前月数据
            newDate: '',
            // 当前的日期
            currentYear: '',
            // 当前的年数
            currentMonth: '',
            // 当前月份
            tableHead: [{
              title: '日'
            }, {
              title: '一'
            }, {
              title: '二'
            }, {
              title: '三'
            }, {
              title: '四'
            }, {
              title: '五'
            }, {
              title: '六'
            }],
            // tableHead: [
            //   { title: 'Sun' },
            //   { title: 'Mon' },
            //   { title: 'Tues' },
            //   { title: 'Wed' },
            //   { title: 'Thur' },
            //   { title: 'Fri' },
            //   { title: 'Sat' },
            // ],
            // hasEmptyGrid: false,
            multi: false,
            // 是否支持多选
            empytGrids: null,
            // 上月应占的格子
            lastEmptyGrids: null // 下月应占的格子

          }
        },
        created: function created () {
          this.initData()
        },
        methods: {
          initData: function initData () {
            if (!this.newDate) {
              this.newDate = new Date()
            }

            this.currentYear = this.newDate.getFullYear()
            this.currentMonth = this.newDate.getMonth() + 1
            this.render(this.currentYear, this.currentMonth)
          },
          // 重新渲染数据
          render: function render (year, month) {
            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
            var days = utils_calculateDays(year, month)
            this.dateArr = days // const { hasEmptyGrid, emptyGrids } = calculateEmptyGrids(this.currentYear, this.currentMonth)
            // this.hasEmptyGrid = hasEmptyGrid
            // this.empytGrids = emptyGrids

            var emptyGrids = utils_calculatePrevMonthGrids(year, month)
            var lastEmptyGrids = utils_calculateNextMonthGrids(year, month)
            this.empytGrids = emptyGrids
            this.lastEmptyGrids = lastEmptyGrids
            this.getTaskInfo() // TODO:
          },
          go: function go (year, month) {
            this.render(year, month, true)
            this.currentYear = year
            this.currentMonth = month
          },
          prev: function prev () {
            var currentMonth = this.currentMonth - 1
            var currentYear = this.currentYear

            if (currentMonth < 1) {
              currentYear = currentYear - 1
              currentMonth = 12
            }

            this.render(currentYear, currentMonth, true)
            this.currentYear = currentYear
            this.currentMonth = currentMonth
          },
          next: function next () {
            var currentMonth = this.currentMonth + 1
            var currentYear = this.currentYear

            if (currentMonth > 12) {
              currentYear = currentYear + 1
              currentMonth = 1
            }

            this.render(currentYear, currentMonth, true)
            this.currentYear = currentYear
            this.currentMonth = currentMonth
          },
          // 点击日期
          tapDayItem: function tapDayItem (item) {
            if (!this.multi) {
              // 单选
              this.dateArr.forEach(function (item) {
                item.choosed = false
              })
            }

            item.choosed = !item.choosed
          },
          getTaskInfo: function getTaskInfo () {
            var taskInfo = [{
              day: 8,
              status: 1,
              msg: '亲，您的任务快到期了'
            }]
            this.dateArr = this.dateArr.map(function (dateItem) {
              return _objectSpread({}, dateItem, taskInfo.find(function (resItem) {
                return resItem.day === dateItem.day
              }))
            })
            console.log(this.dateArr)
          }
        }
      })
      // CONCATENATED MODULE: ./packages/views/index.vue?vue&type=script&lang=js&
      /* harmony default export */ var packages_viewsvue_type_script_lang_js_ = (viewsvue_type_script_lang_js_)
      // EXTERNAL MODULE: ./packages/views/index.vue?vue&type=style&index=0&lang=scss&
      var viewsvue_type_style_index_0_lang_scss_ = __webpack_require__('c8ed')

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent (
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports

        // render functions
        if (render) {
          options.render = render
          options.staticRenderFns = staticRenderFns
          options._compiled = true
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true
        }

        // scopedId
        if (scopeId) {
          options._scopeId = 'data-v-' + scopeId
        }

        var hook
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context)
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier)
            }
          }
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook
        } else if (injectStyles) {
          hook = shadowMode
            ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
            : injectStyles
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook
            // register for functioal component in vue file
            var originalRender = options.render
            options.render = function renderWithStyleInjection (h, context) {
              hook.call(context)
              return originalRender(h, context)
            }
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook]
          }
        }

        return {
          exports: scriptExports,
          options: options
        }
      }

      // CONCATENATED MODULE: ./packages/views/index.vue

      /* normalize component */

      var component = normalizeComponent(
        packages_viewsvue_type_script_lang_js_,
        viewsvue_type_template_id_27538f2a_render,
        staticRenderFns,
        false,
        null,
        null,
        null

      )

      /* harmony default export */ var views = (component.exports)
      // CONCATENATED MODULE: ./packages/index.js

      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(v_tooltip_esm['a' /* default */])

      views.install = function (Vue) {
        Vue.component(views.name, views)
      }

      /* harmony default export */ var packages_0 = (views)
      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ var entry_lib = __webpack_exports__['default'] = (packages_0)
      /***/ },

    /***/ 'fde4':
    /***/ function (module, exports, __webpack_require__) {
      __webpack_require__('bf90')
      var $Object = __webpack_require__('584a').Object
      module.exports = function getOwnPropertyDescriptor (it, key) {
        return $Object.getOwnPropertyDescriptor(it, key)
      }
      /***/ }

    /******/ })
})
// # sourceMappingURL=vue-calendar.umd.js.map
