(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    var lodash_clonedeep = createCommonjsModule(function (module, exports) {
    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
    cloneableTags[boolTag] = cloneableTags[dateTag] =
    cloneableTags[float32Tag] = cloneableTags[float64Tag] =
    cloneableTags[int8Tag] = cloneableTags[int16Tag] =
    cloneableTags[int32Tag] = cloneableTags[mapTag] =
    cloneableTags[numberTag] = cloneableTags[objectTag] =
    cloneableTags[regexpTag] = cloneableTags[setTag] =
    cloneableTags[stringTag] = cloneableTags[symbolTag] =
    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] =
    cloneableTags[weakMapTag] = false;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /**
     * Adds the key-value `pair` to `map`.
     *
     * @private
     * @param {Object} map The map to modify.
     * @param {Array} pair The key-value pair to add.
     * @returns {Object} Returns `map`.
     */
    function addMapEntry(map, pair) {
      // Don't return `map.set` because it's not chainable in IE 11.
      map.set(pair[0], pair[1]);
      return map;
    }

    /**
     * Adds `value` to `set`.
     *
     * @private
     * @param {Object} set The set to modify.
     * @param {*} value The value to add.
     * @returns {Object} Returns `set`.
     */
    function addSetEntry(set, value) {
      // Don't return `set.add` because it's not chainable in IE 11.
      set.add(value);
      return set;
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array ? array.length : 0;

      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }

    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);

      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__'];

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined,
        Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeKeys = overArg(Object.keys, Object);

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(root, 'DataView'),
        Map = getNative(root, 'Map'),
        Promise = getNative(root, 'Promise'),
        Set = getNative(root, 'Set'),
        WeakMap = getNative(root, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }

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
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

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
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

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
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

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
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      return this.__data__['delete'](key);
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

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
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = (isArray(value) || isArguments(value))
        ? baseTimes(value.length, String)
        : [];

      var length = result.length,
          skipIndexes = !!length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }

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
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        object[key] = value;
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {boolean} [isFull] Specify a clone including symbols.
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      return objectToString.call(value);
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

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
    function copyObject(source, props, object, customizer) {
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        assignValue(object, key, newValue === undefined ? source[key] : newValue);
      }
      return object;
    }

    /**
     * Copies own symbol properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * Creates an array of the own enumerable symbol properties of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11,
    // for data views in Edge < 14, and promises in Node.js.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to undefined.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }

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
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

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
    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }

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
    var isArray = Array.isArray;

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
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

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
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

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
    var isBuffer = nativeIsBuffer || stubFalse;

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
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }

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
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

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
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

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
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
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
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

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
    function stubFalse() {
      return false;
    }

    module.exports = cloneDeep;
    });

    function fixOffset(notes) {
        var offset = notes[0].x || 0;
        for (var _i = 0, notes_1 = notes; _i < notes_1.length; _i++) {
            var note = notes_1[_i];
            offset = Math.min(offset, note.x);
        }
        return notes.map(function (note) { return ({
            pitch: note.pitch,
            x: note.x - offset,
            duration: note.duration
        }); });
    }
    var songData = {
        'New Song': {
            id: 'New Song',
            title: '[New Song]',
            bpm: 120,
            instrumentId: 'Piano',
            notes: []
        },
        'Carol': {
            id: 'Carol',
            title: 'Carol of the Bells',
            bpm: 90,
            instrumentId: 'Piano',
            notes: [{ 'pitch': 'Bb4', 'x': 0, 'duration': 2 }, { 'pitch': 'A4', 'x': 2, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 3, 'duration': 1 }, { 'pitch': 'G4', 'x': 4, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 6, 'duration': 2 }, { 'pitch': 'F4', 'x': 6, 'duration': 6 }, { 'pitch': 'A4', 'x': 8, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 9, 'duration': 1 }, { 'pitch': 'G4', 'x': 10, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 12, 'duration': 2 }, { 'pitch': 'D#4', 'x': 12, 'duration': 6 }, { 'pitch': 'A4', 'x': 14, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 15, 'duration': 1 }, { 'pitch': 'G4', 'x': 16, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 18, 'duration': 2 }, { 'pitch': 'D4', 'x': 18, 'duration': 6 }, { 'pitch': 'A4', 'x': 20, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 21, 'duration': 1 }, { 'pitch': 'G4', 'x': 22, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 24, 'duration': 2 }, { 'pitch': 'D#4', 'x': 24, 'duration': 6 }, { 'pitch': 'A4', 'x': 26, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 27, 'duration': 1 }, { 'pitch': 'G4', 'x': 28, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 30, 'duration': 2 }, { 'pitch': 'D4', 'x': 30, 'duration': 6 }, { 'pitch': 'F4', 'x': 30, 'duration': 6 }, { 'pitch': 'A4', 'x': 32, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 33, 'duration': 1 }, { 'pitch': 'G4', 'x': 34, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 36, 'duration': 2 }, { 'pitch': 'C4', 'x': 36, 'duration': 6 }, { 'pitch': 'D#4', 'x': 36, 'duration': 6 }, { 'pitch': 'A4', 'x': 38, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 39, 'duration': 1 }, { 'pitch': 'G4', 'x': 40, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 42, 'duration': 2 }, { 'pitch': 'G3', 'x': 42, 'duration': 6 }, { 'pitch': 'D4', 'x': 42, 'duration': 6 }, { 'pitch': 'A4', 'x': 44, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 45, 'duration': 1 }, { 'pitch': 'G4', 'x': 46, 'duration': 2 }, { 'pitch': 'G4', 'x': 48, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 48, 'duration': 2 }, { 'pitch': 'D#3', 'x': 48, 'duration': 6 }, { 'pitch': 'C4', 'x': 48, 'duration': 6 }, { 'pitch': 'A4', 'x': 50, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 51, 'duration': 1 }, { 'pitch': 'G4', 'x': 52, 'duration': 2 }, { 'pitch': 'G4', 'x': 54, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 54, 'duration': 2 }, { 'pitch': 'G3', 'x': 54, 'duration': 6 }, { 'pitch': 'D4', 'x': 54, 'duration': 6 }, { 'pitch': 'A4', 'x': 56, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 57, 'duration': 1 }, { 'pitch': 'G4', 'x': 58, 'duration': 2 }, { 'pitch': 'G4', 'x': 60, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 60, 'duration': 2 }, { 'pitch': 'D#3', 'x': 60, 'duration': 6 }, { 'pitch': 'C4', 'x': 60, 'duration': 6 }, { 'pitch': 'A4', 'x': 62, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 63, 'duration': 1 }, { 'pitch': 'G4', 'x': 64, 'duration': 2 }, { 'pitch': 'G4', 'x': 66, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 66, 'duration': 2 }, { 'pitch': 'G3', 'x': 66, 'duration': 6 }, { 'pitch': 'D4', 'x': 66, 'duration': 6 }, { 'pitch': 'A4', 'x': 68, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 69, 'duration': 1 }, { 'pitch': 'G4', 'x': 70, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 72, 'duration': 2 }, { 'pitch': 'D5', 'x': 72, 'duration': 2 }, { 'pitch': 'G3', 'x': 72, 'duration': 6 }, { 'pitch': 'D4', 'x': 72, 'duration': 6 }, { 'pitch': 'C5', 'x': 74, 'duration': 1 }, { 'pitch': 'D5', 'x': 75, 'duration': 1 }, { 'pitch': 'G4', 'x': 76, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 76, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 78, 'duration': 2 }, { 'pitch': 'D5', 'x': 78, 'duration': 2 }, { 'pitch': 'G3', 'x': 78, 'duration': 6 }, { 'pitch': 'E4', 'x': 78, 'duration': 6 }, { 'pitch': 'C5', 'x': 80, 'duration': 1 }, { 'pitch': 'D5', 'x': 81, 'duration': 1 }, { 'pitch': 'G4', 'x': 82, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 82, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 84, 'duration': 2 }, { 'pitch': 'D5', 'x': 84, 'duration': 2 }, { 'pitch': 'G3', 'x': 84, 'duration': 6 }, { 'pitch': 'F4', 'x': 84, 'duration': 6 }, { 'pitch': 'C5', 'x': 86, 'duration': 1 }, { 'pitch': 'D5', 'x': 87, 'duration': 1 }, { 'pitch': 'G4', 'x': 88, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 88, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 90, 'duration': 2 }, { 'pitch': 'D5', 'x': 90, 'duration': 2 }, { 'pitch': 'G3', 'x': 90, 'duration': 2 }, { 'pitch': 'E4', 'x': 90, 'duration': 2 }, { 'pitch': 'C5', 'x': 92, 'duration': 1 }, { 'pitch': 'G3', 'x': 92, 'duration': 2 }, { 'pitch': 'D#4', 'x': 92, 'duration': 2 }, { 'pitch': 'D5', 'x': 93, 'duration': 1 }, { 'pitch': 'G4', 'x': 94, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 94, 'duration': 2 }, { 'pitch': 'G3', 'x': 94, 'duration': 2 }, { 'pitch': 'D4', 'x': 94, 'duration': 2 }, { 'pitch': 'G4', 'x': 96, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 96, 'duration': 2 }, { 'pitch': 'D5', 'x': 96, 'duration': 2 }, { 'pitch': 'G5', 'x': 96, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 96, 'duration': 6 }, { 'pitch': 'D4', 'x': 96, 'duration': 6 }, { 'pitch': 'G4', 'x': 98, 'duration': 1 }, { 'pitch': 'G5', 'x': 98, 'duration': 1 }, { 'pitch': 'G4', 'x': 99, 'duration': 1 }, { 'pitch': 'G5', 'x': 99, 'duration': 1 }, { 'pitch': 'F4', 'x': 100, 'duration': 1 }, { 'pitch': 'F5', 'x': 100, 'duration': 1 }, { 'pitch': 'D#4', 'x': 101, 'duration': 1 }, { 'pitch': 'D#5', 'x': 101, 'duration': 1 }, { 'pitch': 'D5', 'x': 102, 'duration': 2 }, { 'pitch': 'D4', 'x': 102, 'duration': 6 }, { 'pitch': 'G4', 'x': 102, 'duration': 6 }, { 'pitch': 'Bb3', 'x': 102, 'duration': 6 }, { 'pitch': 'D5', 'x': 104, 'duration': 1 }, { 'pitch': 'D5', 'x': 105, 'duration': 1 }, { 'pitch': 'C5', 'x': 106, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 107, 'duration': 1 }, { 'pitch': 'C5', 'x': 108, 'duration': 2 }, { 'pitch': 'D#4', 'x': 108, 'duration': 6 }, { 'pitch': 'G4', 'x': 108, 'duration': 6 }, { 'pitch': 'Bb3', 'x': 108, 'duration': 6 }, { 'pitch': 'C5', 'x': 110, 'duration': 1 }, { 'pitch': 'C5', 'x': 111, 'duration': 1 }, { 'pitch': 'D5', 'x': 112, 'duration': 1 }, { 'pitch': 'C5', 'x': 113, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 114, 'duration': 2 }, { 'pitch': 'D4', 'x': 114, 'duration': 6 }, { 'pitch': 'Bb3', 'x': 114, 'duration': 6 }, { 'pitch': 'A4', 'x': 116, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 117, 'duration': 1 }, { 'pitch': 'G4', 'x': 118, 'duration': 2 }, { 'pitch': 'D4', 'x': 120, 'duration': 1 }, { 'pitch': 'D3', 'x': 120, 'duration': 6 }, { 'pitch': 'F#3', 'x': 120, 'duration': 6 }, { 'pitch': 'E4', 'x': 121, 'duration': 1 }, { 'pitch': 'F#4', 'x': 122, 'duration': 1 }, { 'pitch': 'G4', 'x': 123, 'duration': 1 }, { 'pitch': 'A4', 'x': 124, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 125, 'duration': 1 }, { 'pitch': 'C5', 'x': 126, 'duration': 1 }, { 'pitch': 'E4', 'x': 126, 'duration': 2 }, { 'pitch': 'D3', 'x': 126, 'duration': 4 }, { 'pitch': 'A3', 'x': 126, 'duration': 4 }, { 'pitch': 'D5', 'x': 127, 'duration': 1 }, { 'pitch': 'C5', 'x': 128, 'duration': 2 }, { 'pitch': 'F#4', 'x': 128, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 130, 'duration': 2 }, { 'pitch': 'G4', 'x': 130, 'duration': 2 }, { 'pitch': 'D3', 'x': 130, 'duration': 2 }, { 'pitch': 'G3', 'x': 130, 'duration': 2 }, { 'pitch': 'D4', 'x': 132, 'duration': 1 }, { 'pitch': 'D3', 'x': 132, 'duration': 6 }, { 'pitch': 'F#3', 'x': 132, 'duration': 6 }, { 'pitch': 'E4', 'x': 133, 'duration': 1 }, { 'pitch': 'F#4', 'x': 134, 'duration': 1 }, { 'pitch': 'G4', 'x': 135, 'duration': 1 }, { 'pitch': 'A4', 'x': 136, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 137, 'duration': 1 }, { 'pitch': 'C5', 'x': 138, 'duration': 1 }, { 'pitch': 'E4', 'x': 138, 'duration': 2 }, { 'pitch': 'D3', 'x': 138, 'duration': 4 }, { 'pitch': 'A3', 'x': 138, 'duration': 4 }, { 'pitch': 'D5', 'x': 139, 'duration': 1 }, { 'pitch': 'C5', 'x': 140, 'duration': 2 }, { 'pitch': 'F#4', 'x': 140, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 142, 'duration': 2 }, { 'pitch': 'G4', 'x': 142, 'duration': 2 }, { 'pitch': 'D3', 'x': 142, 'duration': 2 }, { 'pitch': 'G3', 'x': 142, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 144, 'duration': 2 }, { 'pitch': 'D4', 'x': 144, 'duration': 6 }, { 'pitch': 'F3', 'x': 144, 'duration': 6 }, { 'pitch': 'G3', 'x': 144, 'duration': 6 }, { 'pitch': 'A4', 'x': 146, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 147, 'duration': 1 }, { 'pitch': 'G4', 'x': 148, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 150, 'duration': 2 }, { 'pitch': 'C4', 'x': 150, 'duration': 6 }, { 'pitch': 'D#3', 'x': 150, 'duration': 6 }, { 'pitch': 'G3', 'x': 150, 'duration': 6 }, { 'pitch': 'A4', 'x': 152, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 153, 'duration': 1 }, { 'pitch': 'G4', 'x': 154, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 156, 'duration': 2 }, { 'pitch': 'F4', 'x': 156, 'duration': 6 }, { 'pitch': 'D3', 'x': 156, 'duration': 6 }, { 'pitch': 'G3', 'x': 156, 'duration': 6 }, { 'pitch': 'A4', 'x': 158, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 159, 'duration': 1 }, { 'pitch': 'G4', 'x': 160, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 162, 'duration': 2 }, { 'pitch': 'D#4', 'x': 162, 'duration': 6 }, { 'pitch': 'C3', 'x': 162, 'duration': 6 }, { 'pitch': 'G3', 'x': 162, 'duration': 6 }, { 'pitch': 'A4', 'x': 164, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 165, 'duration': 1 }, { 'pitch': 'G4', 'x': 166, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 168, 'duration': 2 }, { 'pitch': 'D4', 'x': 168, 'duration': 6 }, { 'pitch': 'G2', 'x': 168, 'duration': 30 }, { 'pitch': 'G3', 'x': 168, 'duration': 30 }, { 'pitch': 'A4', 'x': 170, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 171, 'duration': 1 }, { 'pitch': 'G4', 'x': 172, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 174, 'duration': 2 }, { 'pitch': 'D4', 'x': 174, 'duration': 6 }, { 'pitch': 'A4', 'x': 176, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 177, 'duration': 1 }, { 'pitch': 'G4', 'x': 178, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 180, 'duration': 2 }, { 'pitch': 'A4', 'x': 182, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 183, 'duration': 1 }, { 'pitch': 'G4', 'x': 184, 'duration': 2 }, { 'pitch': 'Bb4', 'x': 186, 'duration': 2 }, { 'pitch': 'A4', 'x': 188, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 189, 'duration': 1 }, { 'pitch': 'G4', 'x': 190, 'duration': 8 }]
        },
        'Fountain': {
            id: 'Fountain',
            title: 'Great Fairy Fountain',
            bpm: 80,
            instrumentId: 'Piano',
            notes: [{ "pitch": "A5", "x": 0, "duration": 1 }, { "pitch": "Bb2", "x": 0, "duration": 8 }, { "pitch": "D5", "x": 1, "duration": 1 }, { "pitch": "Bb4", "x": 2, "duration": 1 }, { "pitch": "D3", "x": 2, "duration": 1 }, { "pitch": "A3", "x": 3, "duration": 1 }, { "pitch": "G4", "x": 3, "duration": 1 }, { "pitch": "G5", "x": 4, "duration": 1 }, { "pitch": "D5", "x": 5, "duration": 1 }, { "pitch": "Bb4", "x": 6, "duration": 1 }, { "pitch": "G4", "x": 7, "duration": 1 }, { "pitch": "F#5", "x": 8, "duration": 1 }, { "pitch": "D5", "x": 9, "duration": 1 }, { "pitch": "D3", "x": 9, "duration": 1 }, { "pitch": "A3", "x": 10, "duration": 1 }, { "pitch": "Bb4", "x": 10, "duration": 1 }, { "pitch": "G3", "x": 11, "duration": 1 }, { "pitch": "G4", "x": 11, "duration": 1 }, { "pitch": "C4", "x": 12, "duration": 1 }, { "pitch": "G5", "x": 12, "duration": 1 }, { "pitch": "A3", "x": 13, "duration": 1 }, { "pitch": "D5", "x": 13, "duration": 1 }, { "pitch": "G3", "x": 14, "duration": 1 }, { "pitch": "Bb4", "x": 14, "duration": 1 }, { "pitch": "G4", "x": 15, "duration": 1 }, { "pitch": "D3", "x": 15, "duration": 1 }, { "pitch": "G5", "x": 16, "duration": 1 }, { "pitch": "A2", "x": 16, "duration": 8 }, { "pitch": "C5", "x": 17, "duration": 1 }, { "pitch": "A4", "x": 18, "duration": 1 }, { "pitch": "C3", "x": 18, "duration": 1 }, { "pitch": "G3", "x": 19, "duration": 1 }, { "pitch": "F4", "x": 19, "duration": 1 }, { "pitch": "F5", "x": 20, "duration": 1 }, { "pitch": "C5", "x": 21, "duration": 1 }, { "pitch": "A4", "x": 22, "duration": 1 }, { "pitch": "F4", "x": 23, "duration": 1 }, { "pitch": "E5", "x": 24, "duration": 1 }, { "pitch": "C5", "x": 25, "duration": 1 }, { "pitch": "C3", "x": 25, "duration": 1 }, { "pitch": "G3", "x": 26, "duration": 1 }, { "pitch": "A4", "x": 26, "duration": 1 }, { "pitch": "F3", "x": 27, "duration": 1 }, { "pitch": "F4", "x": 27, "duration": 1 }, { "pitch": "C4", "x": 28, "duration": 1 }, { "pitch": "F5", "x": 28, "duration": 1 }, { "pitch": "G3", "x": 29, "duration": 1 }, { "pitch": "C5", "x": 29, "duration": 1 }, { "pitch": "F3", "x": 30, "duration": 1 }, { "pitch": "A4", "x": 30, "duration": 1 }, { "pitch": "F4", "x": 31, "duration": 1 }, { "pitch": "C3", "x": 31, "duration": 1 }, { "pitch": "F5", "x": 32, "duration": 1 }, { "pitch": "G2", "x": 32, "duration": 8 }, { "pitch": "Bb4", "x": 33, "duration": 1 }, { "pitch": "G4", "x": 34, "duration": 1 }, { "pitch": "Bb2", "x": 34, "duration": 1 }, { "pitch": "F3", "x": 35, "duration": 1 }, { "pitch": "E4", "x": 35, "duration": 1 }, { "pitch": "E5", "x": 36, "duration": 1 }, { "pitch": "Bb4", "x": 37, "duration": 1 }, { "pitch": "G4", "x": 38, "duration": 1 }, { "pitch": "E4", "x": 39, "duration": 1 }, { "pitch": "D#5", "x": 40, "duration": 1 }, { "pitch": "Bb4", "x": 41, "duration": 1 }, { "pitch": "G2", "x": 41, "duration": 1 }, { "pitch": "F3", "x": 42, "duration": 1 }, { "pitch": "G4", "x": 42, "duration": 1 }, { "pitch": "E4", "x": 43, "duration": 1 }, { "pitch": "E3", "x": 43, "duration": 1 }, { "pitch": "G3", "x": 44, "duration": 1 }, { "pitch": "E5", "x": 44, "duration": 1 }, { "pitch": "Bb4", "x": 45, "duration": 1 }, { "pitch": "E3", "x": 45, "duration": 1 }, { "pitch": "G4", "x": 46, "duration": 1 }, { "pitch": "D3", "x": 46, "duration": 1 }, { "pitch": "E4", "x": 47, "duration": 1 }, { "pitch": "Bb2", "x": 47, "duration": 1 }, { "pitch": "E5", "x": 48, "duration": 1 }, { "pitch": "F2", "x": 48, "duration": 8 }, { "pitch": "A4", "x": 49, "duration": 1 }, { "pitch": "F4", "x": 50, "duration": 1 }, { "pitch": "A2", "x": 50, "duration": 1 }, { "pitch": "D4", "x": 51, "duration": 1 }, { "pitch": "E3", "x": 51, "duration": 1 }, { "pitch": "D5", "x": 52, "duration": 1 }, { "pitch": "A4", "x": 53, "duration": 1 }, { "pitch": "F4", "x": 54, "duration": 1 }, { "pitch": "D4", "x": 55, "duration": 1 }, { "pitch": "C#5", "x": 56, "duration": 1 }, { "pitch": "A4", "x": 57, "duration": 1 }, { "pitch": "F2", "x": 57, "duration": 1 }, { "pitch": "F4", "x": 58, "duration": 1 }, { "pitch": "E3", "x": 58, "duration": 1 }, { "pitch": "D4", "x": 59, "duration": 1 }, { "pitch": "D3", "x": 59, "duration": 1 }, { "pitch": "G3", "x": 60, "duration": 1 }, { "pitch": "D5", "x": 60, "duration": 1 }, { "pitch": "F3", "x": 61, "duration": 1 }, { "pitch": "A4", "x": 61, "duration": 1 }, { "pitch": "C4", "x": 62, "duration": 1 }, { "pitch": "F4", "x": 62, "duration": 1 }, { "pitch": "Bb3", "x": 63, "duration": 1 }, { "pitch": "D4", "x": 63, "duration": 1 }, { "pitch": "A5", "x": 64, "duration": 1 }, { "pitch": "Bb2", "x": 64, "duration": 8 }, { "pitch": "D5", "x": 65, "duration": 1 }, { "pitch": "Bb4", "x": 66, "duration": 1 }, { "pitch": "D3", "x": 66, "duration": 1 }, { "pitch": "A3", "x": 67, "duration": 1 }, { "pitch": "G4", "x": 67, "duration": 1 }, { "pitch": "G5", "x": 68, "duration": 1 }, { "pitch": "D5", "x": 69, "duration": 1 }, { "pitch": "Bb4", "x": 70, "duration": 1 }, { "pitch": "G4", "x": 71, "duration": 1 }, { "pitch": "F#5", "x": 72, "duration": 1 }, { "pitch": "D5", "x": 73, "duration": 1 }, { "pitch": "D3", "x": 73, "duration": 1 }, { "pitch": "A3", "x": 74, "duration": 1 }, { "pitch": "Bb4", "x": 74, "duration": 1 }, { "pitch": "G3", "x": 75, "duration": 1 }, { "pitch": "G4", "x": 75, "duration": 1 }, { "pitch": "C4", "x": 76, "duration": 1 }, { "pitch": "G5", "x": 76, "duration": 1 }, { "pitch": "A3", "x": 77, "duration": 1 }, { "pitch": "D5", "x": 77, "duration": 1 }, { "pitch": "G3", "x": 78, "duration": 1 }, { "pitch": "Bb4", "x": 78, "duration": 1 }, { "pitch": "G4", "x": 79, "duration": 1 }, { "pitch": "D3", "x": 79, "duration": 1 }, { "pitch": "Bb5", "x": 80, "duration": 1 }, { "pitch": "A2", "x": 80, "duration": 2 }, { "pitch": "D#5", "x": 81, "duration": 1 }, { "pitch": "C5", "x": 82, "duration": 1 }, { "pitch": "C3", "x": 82, "duration": 1 }, { "pitch": "C4", "x": 83, "duration": 1 }, { "pitch": "F#4", "x": 83, "duration": 1 }, { "pitch": "A5", "x": 84, "duration": 1 }, { "pitch": "D#5", "x": 85, "duration": 1 }, { "pitch": "C5", "x": 86, "duration": 1 }, { "pitch": "F#4", "x": 87, "duration": 1 }, { "pitch": "G#5", "x": 88, "duration": 1 }, { "pitch": "D3", "x": 88, "duration": 1 }, { "pitch": "D#5", "x": 89, "duration": 1 }, { "pitch": "C3", "x": 89, "duration": 1 }, { "pitch": "C4", "x": 90, "duration": 1 }, { "pitch": "C5", "x": 90, "duration": 1 }, { "pitch": "A3", "x": 91, "duration": 1 }, { "pitch": "F#4", "x": 91, "duration": 1 }, { "pitch": "D#4", "x": 92, "duration": 1 }, { "pitch": "A5", "x": 92, "duration": 1 }, { "pitch": "D4", "x": 93, "duration": 1 }, { "pitch": "D#5", "x": 93, "duration": 1 }, { "pitch": "C4", "x": 94, "duration": 1 }, { "pitch": "C5", "x": 94, "duration": 1 }, { "pitch": "A3", "x": 95, "duration": 1 }, { "pitch": "F#4", "x": 95, "duration": 1 }, { "pitch": "C6", "x": 96, "duration": 1 }, { "pitch": "G2", "x": 96, "duration": 1 }, { "pitch": "D5", "x": 97, "duration": 1 }, { "pitch": "Bb2", "x": 97, "duration": 1 }, { "pitch": "Bb4", "x": 98, "duration": 1 }, { "pitch": "D3", "x": 98, "duration": 1 }, { "pitch": "Bb3", "x": 99, "duration": 1 }, { "pitch": "G4", "x": 99, "duration": 1 }, { "pitch": "Bb5", "x": 100, "duration": 1 }, { "pitch": "D5", "x": 101, "duration": 1 }, { "pitch": "Bb4", "x": 102, "duration": 1 }, { "pitch": "G4", "x": 103, "duration": 1 }, { "pitch": "A5", "x": 104, "duration": 1 }, { "pitch": "D5", "x": 105, "duration": 1 }, { "pitch": "Bb2", "x": 105, "duration": 1 }, { "pitch": "Bb3", "x": 106, "duration": 1 }, { "pitch": "Bb4", "x": 106, "duration": 1 }, { "pitch": "A3", "x": 107, "duration": 1 }, { "pitch": "G4", "x": 107, "duration": 1 }, { "pitch": "C4", "x": 108, "duration": 1 }, { "pitch": "Bb5", "x": 108, "duration": 1 }, { "pitch": "Bb3", "x": 109, "duration": 1 }, { "pitch": "D5", "x": 109, "duration": 1 }, { "pitch": "G3", "x": 110, "duration": 1 }, { "pitch": "Bb4", "x": 110, "duration": 1 }, { "pitch": "G4", "x": 111, "duration": 1 }, { "pitch": "D3", "x": 111, "duration": 1 }, { "pitch": "A5", "x": 112, "duration": 1 }, { "pitch": "G2", "x": 112, "duration": 1 }, { "pitch": "Bb4", "x": 113, "duration": 1 }, { "pitch": "C3", "x": 113, "duration": 1 }, { "pitch": "G3", "x": 114, "duration": 1 }, { "pitch": "G4", "x": 114, "duration": 1 }, { "pitch": "Bb3", "x": 115, "duration": 1 }, { "pitch": "E4", "x": 115, "duration": 1 }, { "pitch": "G5", "x": 116, "duration": 1 }, { "pitch": "Bb4", "x": 117, "duration": 1 }, { "pitch": "G4", "x": 118, "duration": 1 }, { "pitch": "E4", "x": 119, "duration": 1 }, { "pitch": "F5", "x": 120, "duration": 1 }, { "pitch": "Bb4", "x": 121, "duration": 1 }, { "pitch": "C3", "x": 121, "duration": 1 }, { "pitch": "Bb3", "x": 122, "duration": 1 }, { "pitch": "G4", "x": 122, "duration": 1 }, { "pitch": "G3", "x": 123, "duration": 1 }, { "pitch": "E4", "x": 123, "duration": 1 }, { "pitch": "E5", "x": 124, "duration": 1 }, { "pitch": "E3", "x": 124, "duration": 1 }, { "pitch": "Bb4", "x": 125, "duration": 1 }, { "pitch": "D3", "x": 125, "duration": 1 }, { "pitch": "G3", "x": 126, "duration": 1 }, { "pitch": "G4", "x": 126, "duration": 1 }, { "pitch": "E4", "x": 127, "duration": 1 }, { "pitch": "E3", "x": 127, "duration": 1 }]
        },
        'Pirate': {
            id: 'Pirate',
            title: 'He\'s a Pirate',
            bpm: 100,
            instrumentId: 'Piano',
            notes: [{ 'pitch': 'A3', 'x': 0, 'duration': 1 }, { 'pitch': 'C4', 'x': 1, 'duration': 1 }, { 'pitch': 'D4', 'x': 2, 'duration': 2 }, { 'pitch': 'D3', 'x': 2, 'duration': 6 }, { 'pitch': 'D4', 'x': 4, 'duration': 2 }, { 'pitch': 'D4', 'x': 6, 'duration': 1 }, { 'pitch': 'E4', 'x': 7, 'duration': 1 }, { 'pitch': 'F4', 'x': 8, 'duration': 2 }, { 'pitch': 'Bb2', 'x': 8, 'duration': 6 }, { 'pitch': 'F4', 'x': 10, 'duration': 2 }, { 'pitch': 'F4', 'x': 12, 'duration': 1 }, { 'pitch': 'G4', 'x': 13, 'duration': 1 }, { 'pitch': 'E4', 'x': 14, 'duration': 2 }, { 'pitch': 'A2', 'x': 14, 'duration': 6 }, { 'pitch': 'E4', 'x': 16, 'duration': 2 }, { 'pitch': 'D4', 'x': 18, 'duration': 1 }, { 'pitch': 'C4', 'x': 19, 'duration': 1 }, { 'pitch': 'C4', 'x': 20, 'duration': 1 }, { 'pitch': 'C3', 'x': 20, 'duration': 1 }, { 'pitch': 'D4', 'x': 21, 'duration': 2 }, { 'pitch': 'D3', 'x': 21, 'duration': 2 }, { 'pitch': 'A3', 'x': 24, 'duration': 1 }, { 'pitch': 'C4', 'x': 25, 'duration': 1 }, { 'pitch': 'D4', 'x': 26, 'duration': 2 }, { 'pitch': 'Bb2', 'x': 26, 'duration': 6 }, { 'pitch': 'D4', 'x': 28, 'duration': 2 }, { 'pitch': 'D4', 'x': 30, 'duration': 1 }, { 'pitch': 'E4', 'x': 31, 'duration': 1 }, { 'pitch': 'F4', 'x': 32, 'duration': 2 }, { 'pitch': 'F2', 'x': 32, 'duration': 6 }, { 'pitch': 'F4', 'x': 34, 'duration': 2 }, { 'pitch': 'F4', 'x': 36, 'duration': 1 }, { 'pitch': 'G4', 'x': 37, 'duration': 1 }, { 'pitch': 'E4', 'x': 38, 'duration': 2 }, { 'pitch': 'C3', 'x': 38, 'duration': 4 }, { 'pitch': 'E4', 'x': 40, 'duration': 2 }, { 'pitch': 'D4', 'x': 42, 'duration': 1 }, { 'pitch': 'A2', 'x': 42, 'duration': 2 }, { 'pitch': 'C4', 'x': 43, 'duration': 1 }, { 'pitch': 'D4', 'x': 44, 'duration': 2 }, { 'pitch': 'D3', 'x': 44, 'duration': 6 }, { 'pitch': 'A3', 'x': 48, 'duration': 1 }, { 'pitch': 'C4', 'x': 49, 'duration': 1 }, { 'pitch': 'D4', 'x': 50, 'duration': 2 }, { 'pitch': 'D3', 'x': 50, 'duration': 6 }, { 'pitch': 'D4', 'x': 52, 'duration': 2 }, { 'pitch': 'D4', 'x': 54, 'duration': 1 }, { 'pitch': 'F4', 'x': 55, 'duration': 1 }, { 'pitch': 'G4', 'x': 56, 'duration': 2 }, { 'pitch': 'Bb2', 'x': 56, 'duration': 6 }, { 'pitch': 'G4', 'x': 58, 'duration': 2 }, { 'pitch': 'G4', 'x': 60, 'duration': 1 }, { 'pitch': 'A4', 'x': 61, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 62, 'duration': 2 }, { 'pitch': 'G2', 'x': 62, 'duration': 6 }, { 'pitch': 'Bb4', 'x': 64, 'duration': 2 }, { 'pitch': 'A4', 'x': 66, 'duration': 1 }, { 'pitch': 'G4', 'x': 67, 'duration': 1 }, { 'pitch': 'A4', 'x': 68, 'duration': 1 }, { 'pitch': 'D3', 'x': 68, 'duration': 6 }, { 'pitch': 'D4', 'x': 69, 'duration': 2 }, { 'pitch': 'D4', 'x': 72, 'duration': 1 }, { 'pitch': 'E4', 'x': 73, 'duration': 1 }, { 'pitch': 'F4', 'x': 74, 'duration': 2 }, { 'pitch': 'Bb2', 'x': 74, 'duration': 6 }, { 'pitch': 'F4', 'x': 76, 'duration': 2 }, { 'pitch': 'G4', 'x': 78, 'duration': 2 }, { 'pitch': 'A4', 'x': 80, 'duration': 1 }, { 'pitch': 'D3', 'x': 80, 'duration': 6 }, { 'pitch': 'D4', 'x': 81, 'duration': 2 }, { 'pitch': 'D4', 'x': 84, 'duration': 1 }, { 'pitch': 'F4', 'x': 85, 'duration': 1 }, { 'pitch': 'E4', 'x': 86, 'duration': 2 }, { 'pitch': 'A2', 'x': 86, 'duration': 6 }, { 'pitch': 'E4', 'x': 88, 'duration': 2 }, { 'pitch': 'F4', 'x': 90, 'duration': 1 }, { 'pitch': 'D4', 'x': 91, 'duration': 1 }, { 'pitch': 'E4', 'x': 92, 'duration': 2 }, { 'pitch': 'A2', 'x': 92, 'duration': 6 }]
        },
        'Fantasy': {
            id: 'Fantasy',
            title: 'Kuhlau - Fantasy Op. 38',
            bpm: 90,
            instrumentId: 'Flute',
            notes: [{ "pitch": "D5", "x": 0, "duration": 15 }, { "pitch": "A4", "x": 15, "duration": 1 }, { "pitch": "F#5", "x": 16, "duration": 7 }, { "pitch": "D5", "x": 23, "duration": 1 }, { "pitch": "A5", "x": 24, "duration": 15 }, { "pitch": "F#5", "x": 39, "duration": 1 }, { "pitch": "D6", "x": 40, "duration": 7 }, { "pitch": "A5", "x": 47, "duration": 1 }, { "pitch": "F#6", "x": 48, "duration": 9 }, { "pitch": "E6", "x": 57, "duration": 1 }, { "pitch": "D6", "x": 58, "duration": 1 }, { "pitch": "C#6", "x": 59, "duration": 1 }, { "pitch": "E6", "x": 60, "duration": 1 }, { "pitch": "D6", "x": 61, "duration": 1 }, { "pitch": "C#6", "x": 62, "duration": 1 }, { "pitch": "B5", "x": 63, "duration": 1 }, { "pitch": "A5", "x": 64, "duration": 1 }, { "pitch": "G#5", "x": 65, "duration": 1 }, { "pitch": "B5", "x": 66, "duration": 1 }, { "pitch": "A5", "x": 67, "duration": 1 }, { "pitch": "G5", "x": 68, "duration": 1 }, { "pitch": "F#5", "x": 69, "duration": 1 }, { "pitch": "E5", "x": 70, "duration": 1 }, { "pitch": "D5", "x": 71, "duration": 1 }, { "pitch": "C#5", "x": 72, "duration": 2 }, { "pitch": "D5", "x": 74, "duration": 1 }, { "pitch": "E5", "x": 76, "duration": 1 }, { "pitch": "F#5", "x": 78, "duration": 1 }, { "pitch": "A5", "x": 80, "duration": 8 }, { "pitch": "G5", "x": 88, "duration": 4 }, { "pitch": "A4", "x": 96, "duration": 15 }, { "pitch": "E4", "x": 111, "duration": 1 }, { "pitch": "C#5", "x": 112, "duration": 3 }, { "pitch": "A4", "x": 115, "duration": 1 }, { "pitch": "E5", "x": 116, "duration": 3 }, { "pitch": "C#5", "x": 119, "duration": 1 }, { "pitch": "G5", "x": 120, "duration": 15 }, { "pitch": "E5", "x": 135, "duration": 1 }, { "pitch": "C#6", "x": 136, "duration": 3 }, { "pitch": "G5", "x": 139, "duration": 1 }, { "pitch": "E6", "x": 140, "duration": 3 }, { "pitch": "C#6", "x": 143, "duration": 1 }, { "pitch": "G6", "x": 144, "duration": 9 }, { "pitch": "F#6", "x": 153, "duration": 1 }, { "pitch": "E6", "x": 154, "duration": 1 }, { "pitch": "D6", "x": 155, "duration": 1 }, { "pitch": "C#6", "x": 156, "duration": 1 }, { "pitch": "B5", "x": 157, "duration": 1 }, { "pitch": "A5", "x": 158, "duration": 1 }, { "pitch": "G#5", "x": 159, "duration": 1 }, { "pitch": "G5", "x": 160, "duration": 1 }, { "pitch": "F#5", "x": 161, "duration": 1 }, { "pitch": "E5", "x": 162, "duration": 1 }, { "pitch": "D5", "x": 163, "duration": 1 }, { "pitch": "C#5", "x": 164, "duration": 1 }, { "pitch": "D5", "x": 165, "duration": 1 }, { "pitch": "E5", "x": 166, "duration": 1 }, { "pitch": "F#5", "x": 167, "duration": 1 }, { "pitch": "G5", "x": 168, "duration": 2 }, { "pitch": "G#5", "x": 170, "duration": 1 }, { "pitch": "A5", "x": 172, "duration": 1 }, { "pitch": "E5", "x": 174, "duration": 1 }, { "pitch": "F5", "x": 176, "duration": 8 }, { "pitch": "F#5", "x": 184, "duration": 4 }]
        },
        'Mario': {
            id: 'Mario',
            title: 'Theme from Super Mario',
            bpm: 120,
            instrumentId: 'Synth Lead',
            notes: fixOffset([{ 'pitch': 'G5', 'x': 9, 'duration': 1 }, { 'pitch': 'E5', 'x': 1, 'duration': 1 }, { 'pitch': 'E5', 'x': 2, 'duration': 1 }, { 'pitch': 'E5', 'x': 4, 'duration': 1 }, { 'pitch': 'E5', 'x': 7, 'duration': 1 }, { 'pitch': 'C5', 'x': 6, 'duration': 1 }, { 'pitch': 'C5', 'x': 17, 'duration': 1 }, { 'pitch': 'B4', 'x': 9, 'duration': 1 }, { 'pitch': 'B4', 'x': 28, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 30, 'duration': 1 }, { 'pitch': 'A4', 'x': 26, 'duration': 1 }, { 'pitch': 'A4', 'x': 31, 'duration': 1 }, { 'pitch': 'G4', 'x': 9, 'duration': 1 }, { 'pitch': 'G4', 'x': 13, 'duration': 1 }, { 'pitch': 'G4', 'x': 20, 'duration': 1 }, { 'pitch': 'G4', 'x': 33, 'duration': 2 }, { 'pitch': 'F#4', 'x': 1, 'duration': 1 }, { 'pitch': 'F#4', 'x': 2, 'duration': 1 }, { 'pitch': 'F#4', 'x': 4, 'duration': 1 }, { 'pitch': 'F#4', 'x': 6, 'duration': 1 }, { 'pitch': 'F#4', 'x': 7, 'duration': 1 }, { 'pitch': 'E4', 'x': 17, 'duration': 1 }, { 'pitch': 'E4', 'x': 23, 'duration': 1 }, { 'pitch': 'D4', 'x': 28, 'duration': 1 }, { 'pitch': 'C#4', 'x': 30, 'duration': 1 }, { 'pitch': 'C4', 'x': 20, 'duration': 1 }, { 'pitch': 'C4', 'x': 26, 'duration': 1 }, { 'pitch': 'C4', 'x': 31, 'duration': 1 }, { 'pitch': 'C4', 'x': 33, 'duration': 2 }, { 'pitch': 'G3', 'x': 13, 'duration': 1 }, { 'pitch': 'G3', 'x': 17, 'duration': 1 }, { 'pitch': 'G3', 'x': 23, 'duration': 1 }, { 'pitch': 'G3', 'x': 28, 'duration': 1 }, { 'pitch': 'F#3', 'x': 30, 'duration': 1 }, { 'pitch': 'F3', 'x': 26, 'duration': 1 }, { 'pitch': 'F3', 'x': 31, 'duration': 1 }, { 'pitch': 'E3', 'x': 20, 'duration': 1 }, { 'pitch': 'E3', 'x': 33, 'duration': 2 }, { 'pitch': 'D3', 'x': 1, 'duration': 1 }, { 'pitch': 'D3', 'x': 2, 'duration': 1 }, { 'pitch': 'D3', 'x': 4, 'duration': 1 }, { 'pitch': 'D3', 'x': 6, 'duration': 1 }, { 'pitch': 'D3', 'x': 7, 'duration': 1 }, { 'pitch': 'C#3', 'x': 23, 'duration': 1 }])
        },
        'Turkish March': {
            id: 'Turkish March',
            title: 'Turkish March',
            bpm: 140,
            instrumentId: 'Piano',
            notes: [{ "pitch": "B4", "x": 0, "duration": 1 }, { "pitch": "A4", "x": 1, "duration": 1 }, { "pitch": "G#4", "x": 2, "duration": 1 }, { "pitch": "A4", "x": 3, "duration": 1 }, { "pitch": "C5", "x": 4, "duration": 2 }, { "pitch": "A3", "x": 4, "duration": 2 }, { "pitch": "E4", "x": 6, "duration": 2 }, { "pitch": "C4", "x": 6, "duration": 2 }, { "pitch": "D5", "x": 8, "duration": 1 }, { "pitch": "E4", "x": 8, "duration": 2 }, { "pitch": "C4", "x": 8, "duration": 2 }, { "pitch": "C5", "x": 9, "duration": 1 }, { "pitch": "B4", "x": 10, "duration": 1 }, { "pitch": "E4", "x": 10, "duration": 2 }, { "pitch": "C4", "x": 10, "duration": 2 }, { "pitch": "C5", "x": 11, "duration": 1 }, { "pitch": "E5", "x": 12, "duration": 2 }, { "pitch": "A3", "x": 12, "duration": 2 }, { "pitch": "E4", "x": 14, "duration": 2 }, { "pitch": "C4", "x": 14, "duration": 2 }, { "pitch": "F5", "x": 16, "duration": 1 }, { "pitch": "E4", "x": 16, "duration": 2 }, { "pitch": "C4", "x": 16, "duration": 2 }, { "pitch": "E5", "x": 17, "duration": 1 }, { "pitch": "D#5", "x": 18, "duration": 1 }, { "pitch": "E4", "x": 18, "duration": 2 }, { "pitch": "C4", "x": 18, "duration": 2 }, { "pitch": "E5", "x": 19, "duration": 1 }, { "pitch": "B5", "x": 20, "duration": 1 }, { "pitch": "A3", "x": 20, "duration": 2 }, { "pitch": "A5", "x": 21, "duration": 1 }, { "pitch": "G#5", "x": 22, "duration": 1 }, { "pitch": "E4", "x": 22, "duration": 2 }, { "pitch": "C4", "x": 22, "duration": 2 }, { "pitch": "A5", "x": 23, "duration": 1 }, { "pitch": "B5", "x": 24, "duration": 1 }, { "pitch": "A3", "x": 24, "duration": 2 }, { "pitch": "A5", "x": 25, "duration": 1 }, { "pitch": "G#5", "x": 26, "duration": 1 }, { "pitch": "E4", "x": 26, "duration": 2 }, { "pitch": "C4", "x": 26, "duration": 2 }, { "pitch": "A5", "x": 27, "duration": 1 }, { "pitch": "A3", "x": 28, "duration": 2 }, { "pitch": "C6", "x": 28, "duration": 4 }, { "pitch": "E4", "x": 30, "duration": 2 }, { "pitch": "C4", "x": 30, "duration": 2 }, { "pitch": "A5", "x": 32, "duration": 2 }, { "pitch": "E4", "x": 32, "duration": 2 }, { "pitch": "C4", "x": 32, "duration": 2 }, { "pitch": "C6", "x": 34, "duration": 2 }, { "pitch": "E4", "x": 34, "duration": 2 }, { "pitch": "C4", "x": 34, "duration": 2 }, { "pitch": "B5", "x": 36, "duration": 2 }, { "pitch": "E3", "x": 36, "duration": 2 }, { "pitch": "A5", "x": 38, "duration": 2 }, { "pitch": "F#5", "x": 38, "duration": 2 }, { "pitch": "B3", "x": 38, "duration": 2 }, { "pitch": "E4", "x": 38, "duration": 2 }, { "pitch": "G5", "x": 40, "duration": 2 }, { "pitch": "E5", "x": 40, "duration": 2 }, { "pitch": "B3", "x": 40, "duration": 2 }, { "pitch": "E4", "x": 40, "duration": 2 }, { "pitch": "A5", "x": 42, "duration": 2 }, { "pitch": "F#5", "x": 42, "duration": 2 }, { "pitch": "B3", "x": 42, "duration": 2 }, { "pitch": "E4", "x": 42, "duration": 2 }, { "pitch": "B5", "x": 44, "duration": 2 }, { "pitch": "E3", "x": 44, "duration": 2 }, { "pitch": "A5", "x": 46, "duration": 2 }, { "pitch": "F#5", "x": 46, "duration": 2 }, { "pitch": "B3", "x": 46, "duration": 2 }, { "pitch": "E4", "x": 46, "duration": 2 }, { "pitch": "G5", "x": 48, "duration": 2 }, { "pitch": "E5", "x": 48, "duration": 2 }, { "pitch": "B3", "x": 48, "duration": 2 }, { "pitch": "E4", "x": 48, "duration": 2 }, { "pitch": "A5", "x": 50, "duration": 2 }, { "pitch": "F#5", "x": 50, "duration": 2 }, { "pitch": "B3", "x": 50, "duration": 2 }, { "pitch": "E4", "x": 50, "duration": 2 }, { "pitch": "B5", "x": 52, "duration": 2 }, { "pitch": "E3", "x": 52, "duration": 2 }, { "pitch": "A5", "x": 54, "duration": 2 }, { "pitch": "F#5", "x": 54, "duration": 2 }, { "pitch": "B3", "x": 54, "duration": 2 }, { "pitch": "E4", "x": 54, "duration": 2 }, { "pitch": "G5", "x": 56, "duration": 2 }, { "pitch": "E5", "x": 56, "duration": 2 }, { "pitch": "B2", "x": 56, "duration": 2 }, { "pitch": "F#5", "x": 58, "duration": 2 }, { "pitch": "D#5", "x": 58, "duration": 2 }, { "pitch": "B3", "x": 58, "duration": 2 }, { "pitch": "E5", "x": 60, "duration": 4 }, { "pitch": "E3", "x": 60, "duration": 4 }, { "pitch": "B4", "x": 64, "duration": 1 }, { "pitch": "A4", "x": 65, "duration": 1 }, { "pitch": "G#4", "x": 66, "duration": 1 }, { "pitch": "A4", "x": 67, "duration": 1 }, { "pitch": "C5", "x": 68, "duration": 2 }, { "pitch": "A3", "x": 68, "duration": 2 }, { "pitch": "E4", "x": 70, "duration": 2 }, { "pitch": "C4", "x": 70, "duration": 2 }, { "pitch": "D5", "x": 72, "duration": 1 }, { "pitch": "E4", "x": 72, "duration": 2 }, { "pitch": "C4", "x": 72, "duration": 2 }, { "pitch": "C5", "x": 73, "duration": 1 }, { "pitch": "B4", "x": 74, "duration": 1 }, { "pitch": "E4", "x": 74, "duration": 2 }, { "pitch": "C4", "x": 74, "duration": 2 }, { "pitch": "C5", "x": 75, "duration": 1 }, { "pitch": "E5", "x": 76, "duration": 2 }, { "pitch": "A3", "x": 76, "duration": 2 }, { "pitch": "E4", "x": 78, "duration": 2 }, { "pitch": "C4", "x": 78, "duration": 2 }, { "pitch": "F5", "x": 80, "duration": 1 }, { "pitch": "E4", "x": 80, "duration": 2 }, { "pitch": "C4", "x": 80, "duration": 2 }, { "pitch": "E5", "x": 81, "duration": 1 }, { "pitch": "D#5", "x": 82, "duration": 1 }, { "pitch": "E4", "x": 82, "duration": 2 }, { "pitch": "C4", "x": 82, "duration": 2 }, { "pitch": "E5", "x": 83, "duration": 1 }, { "pitch": "B5", "x": 84, "duration": 1 }, { "pitch": "A3", "x": 84, "duration": 2 }, { "pitch": "A5", "x": 85, "duration": 1 }, { "pitch": "G#5", "x": 86, "duration": 1 }, { "pitch": "E4", "x": 86, "duration": 2 }, { "pitch": "C4", "x": 86, "duration": 2 }, { "pitch": "A5", "x": 87, "duration": 1 }, { "pitch": "B5", "x": 88, "duration": 1 }, { "pitch": "A3", "x": 88, "duration": 2 }, { "pitch": "A5", "x": 89, "duration": 1 }, { "pitch": "G#5", "x": 90, "duration": 1 }, { "pitch": "E4", "x": 90, "duration": 2 }, { "pitch": "C4", "x": 90, "duration": 2 }, { "pitch": "A5", "x": 91, "duration": 1 }, { "pitch": "A3", "x": 92, "duration": 2 }, { "pitch": "C6", "x": 92, "duration": 4 }, { "pitch": "E4", "x": 94, "duration": 2 }, { "pitch": "C4", "x": 94, "duration": 2 }, { "pitch": "A5", "x": 96, "duration": 2 }, { "pitch": "E4", "x": 96, "duration": 2 }, { "pitch": "C4", "x": 96, "duration": 2 }, { "pitch": "C6", "x": 98, "duration": 2 }, { "pitch": "E4", "x": 98, "duration": 2 }, { "pitch": "C4", "x": 98, "duration": 2 }, { "pitch": "B5", "x": 100, "duration": 2 }, { "pitch": "E3", "x": 100, "duration": 2 }, { "pitch": "A5", "x": 102, "duration": 2 }, { "pitch": "F#5", "x": 102, "duration": 2 }, { "pitch": "B3", "x": 102, "duration": 2 }, { "pitch": "E4", "x": 102, "duration": 2 }, { "pitch": "G5", "x": 104, "duration": 2 }, { "pitch": "E5", "x": 104, "duration": 2 }, { "pitch": "B3", "x": 104, "duration": 2 }, { "pitch": "E4", "x": 104, "duration": 2 }, { "pitch": "A5", "x": 106, "duration": 2 }, { "pitch": "F#5", "x": 106, "duration": 2 }, { "pitch": "B3", "x": 106, "duration": 2 }, { "pitch": "E4", "x": 106, "duration": 2 }, { "pitch": "B5", "x": 108, "duration": 2 }, { "pitch": "E3", "x": 108, "duration": 2 }, { "pitch": "A5", "x": 110, "duration": 2 }, { "pitch": "F#5", "x": 110, "duration": 2 }, { "pitch": "B3", "x": 110, "duration": 2 }, { "pitch": "E4", "x": 110, "duration": 2 }, { "pitch": "G5", "x": 112, "duration": 2 }, { "pitch": "E5", "x": 112, "duration": 2 }, { "pitch": "B3", "x": 112, "duration": 2 }, { "pitch": "E4", "x": 112, "duration": 2 }, { "pitch": "A5", "x": 114, "duration": 2 }, { "pitch": "F#5", "x": 114, "duration": 2 }, { "pitch": "B3", "x": 114, "duration": 2 }, { "pitch": "E4", "x": 114, "duration": 2 }, { "pitch": "B5", "x": 116, "duration": 2 }, { "pitch": "E3", "x": 116, "duration": 2 }, { "pitch": "A5", "x": 118, "duration": 2 }, { "pitch": "F#5", "x": 118, "duration": 2 }, { "pitch": "B3", "x": 118, "duration": 2 }, { "pitch": "E4", "x": 118, "duration": 2 }, { "pitch": "G5", "x": 120, "duration": 2 }, { "pitch": "E5", "x": 120, "duration": 2 }, { "pitch": "B2", "x": 120, "duration": 2 }, { "pitch": "F#5", "x": 122, "duration": 2 }, { "pitch": "D#5", "x": 122, "duration": 2 }, { "pitch": "B3", "x": 122, "duration": 2 }, { "pitch": "E5", "x": 124, "duration": 4 }, { "pitch": "E3", "x": 124, "duration": 4 }]
        },
        'Twinkle': {
            id: 'Twinkle',
            title: 'Twinkle Twinkle Little Star',
            bpm: 80,
            instrumentId: 'Piano',
            notes: fixOffset([{ 'pitch': 'A4', 'x': 5, 'duration': 1 }, { 'pitch': 'A4', 'x': 6, 'duration': 1 }, { 'pitch': 'A4', 'x': 37, 'duration': 1 }, { 'pitch': 'A4', 'x': 38, 'duration': 1 }, { 'pitch': 'G4', 'x': 3, 'duration': 1 }, { 'pitch': 'G4', 'x': 4, 'duration': 1 }, { 'pitch': 'G4', 'x': 7, 'duration': 2 }, { 'pitch': 'G4', 'x': 17, 'duration': 1 }, { 'pitch': 'G4', 'x': 18, 'duration': 1 }, { 'pitch': 'G4', 'x': 25, 'duration': 1 }, { 'pitch': 'G4', 'x': 26, 'duration': 1 }, { 'pitch': 'G4', 'x': 35, 'duration': 1 }, { 'pitch': 'G4', 'x': 36, 'duration': 1 }, { 'pitch': 'G4', 'x': 39, 'duration': 2 }, { 'pitch': 'F4', 'x': 9, 'duration': 1 }, { 'pitch': 'F4', 'x': 10, 'duration': 1 }, { 'pitch': 'F4', 'x': 19, 'duration': 1 }, { 'pitch': 'F4', 'x': 20, 'duration': 1 }, { 'pitch': 'F4', 'x': 27, 'duration': 1 }, { 'pitch': 'F4', 'x': 28, 'duration': 1 }, { 'pitch': 'F4', 'x': 41, 'duration': 1 }, { 'pitch': 'F4', 'x': 42, 'duration': 1 }, { 'pitch': 'E4', 'x': 11, 'duration': 1 }, { 'pitch': 'E4', 'x': 12, 'duration': 1 }, { 'pitch': 'E4', 'x': 21, 'duration': 1 }, { 'pitch': 'E4', 'x': 22, 'duration': 1 }, { 'pitch': 'E4', 'x': 29, 'duration': 1 }, { 'pitch': 'E4', 'x': 30, 'duration': 1 }, { 'pitch': 'E4', 'x': 43, 'duration': 1 }, { 'pitch': 'E4', 'x': 44, 'duration': 1 }, { 'pitch': 'D4', 'x': 13, 'duration': 1 }, { 'pitch': 'D4', 'x': 14, 'duration': 1 }, { 'pitch': 'D4', 'x': 23, 'duration': 2 }, { 'pitch': 'D4', 'x': 31, 'duration': 2 }, { 'pitch': 'D4', 'x': 45, 'duration': 1 }, { 'pitch': 'D4', 'x': 46, 'duration': 1 }, { 'pitch': 'C4', 'x': 1, 'duration': 1 }, { 'pitch': 'C4', 'x': 2, 'duration': 1 }, { 'pitch': 'C4', 'x': 15, 'duration': 2 }, { 'pitch': 'C4', 'x': 33, 'duration': 1 }, { 'pitch': 'C4', 'x': 34, 'duration': 1 }, { 'pitch': 'C4', 'x': 47, 'duration': 2 }])
        }
    };

    var instruments = {
        'Flute': {
            id: 'Flute',
            wad: new Wad({
                source: 'triangle',
                pitch: 'C5',
                volume: 0.5,
                env: {
                    attack: 0.1,
                    decay: 0.02,
                    hold: 0.4,
                    sustain: 0.3,
                    release: 0.2
                },
                filter: {
                    type: 'lowpass',
                    frequency: 600,
                    q: 7,
                    env: {
                        attack: 0.7,
                        frequency: 1600
                    }
                },
                vibrato: {
                    attack: 0.1,
                    speed: 5,
                    magnitude: 6
                }
            })
        },
        'Piano': {
            id: 'Piano',
            wad: new Wad({
                source: 'square',
                pitch: 'C4',
                volume: 0.5,
                env: {
                    attack: 0.01,
                    decay: 0.005,
                    hold: 0.4,
                    sustain: 0.2,
                    release: 0.3
                },
                filter: {
                    type: 'lowpass',
                    frequency: 1200,
                    q: 8.5,
                    env: {
                        attack: 0.2,
                        frequency: 600
                    }
                }
            })
        },
        'Synth Lead': {
            id: 'Synth Lead',
            wad: new Wad({
                source: 'square',
                pitch: 'C4',
                volume: 0.5,
                env: {
                    attack: 0.005,
                    decay: 0.005,
                    hold: 0.4,
                    sustain: 0.3,
                    release: 0.01
                }
            })
        }
    };

    var icons = {
        decrement: 'M396.365 193.613c-10.419 10.701-120.192 115.251-120.192 115.251-5.581 5.709-12.877 8.576-20.173 8.576-7.322 0-14.618-2.867-20.173-8.576 0 0-109.773-104.551-120.218-115.251-10.419-10.701-11.136-29.952 0-41.37 11.162-11.392 26.701-12.313 40.345 0l100.045 95.923 100.019-95.923c13.671-12.313 29.235-11.392 40.346 0 11.161 11.443 10.471 30.695 0 41.37z',
        increment: 'M396.365 267.187c-10.419-10.701-120.192-115.277-120.192-115.277-5.581-5.709-12.877-8.55-20.173-8.55-7.322 0-14.618 2.841-20.173 8.55 0 0-109.773 104.576-120.218 115.277-10.419 10.701-11.136 29.926 0 41.37 11.162 11.417 26.701 12.313 40.345 0l100.045-95.949 100.019 95.923c13.671 12.314 29.235 11.418 40.346 0 11.161-11.417 10.471-30.669 0-41.344z',
        play: 'M427.469 243.533l-219.161 135.783c-15.975 10.47-29.030 2.739-29.030-17.152v-263.577c0-19.891 13.082-27.597 29.030-17.127l219.187 135.782c0 0 7.783 5.478 7.783 13.159-0.026 7.655-7.808 13.133-7.808 13.133z'
    };
    var Icon = function (_a) {
        var name = _a.name, size = _a.size;
        var height = size !== null && size !== void 0 ? size : 12;
        var width = size !== null && size !== void 0 ? size : 12;
        return React.createElement(React.Fragment, null,
            React.createElement("svg", { viewBox: "0 0 512 512", height: height, width: width, className: "Icon" },
                React.createElement("path", { d: icons[name] })));
    };

    var Controls = function (_a) {
        var activeSongId = _a.activeSongId, updateSong = _a.updateSong, togglePlay = _a.togglePlay;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Controls" },
                React.createElement("button", { className: "Control-play", onClick: togglePlay },
                    React.createElement(Icon, { name: "play", size: 18 })),
                React.createElement("div", null,
                    React.createElement("button", { className: "button mR20", onClick: function () {
                            updateSong(activeSongId, { notes: [] });
                        } }, "Clear"))));
    };

    var scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
    var fullScale = [];
    for (var i = 1; i < 7; i++) {
        for (var _i = 0, scale_1 = scale; _i < scale_1.length; _i++) {
            var pitch = scale_1[_i];
            fullScale.unshift("" + pitch + i);
        }
    }
    var fullScaleToYCoord = {};
    (function () {
        for (var i = 0; i < fullScale.length; i++) {
            fullScaleToYCoord[fullScale[i]] = i;
        }
    })();
    function formatPitch(pitch) {
        if (pitch.includes('#'))
            return pitch.replace('#', '♯');
        if (pitch.includes('b'))
            return pitch.replace('b', '♭');
        return pitch[0] + " " + pitch[1];
    }
    // determines the # of beats (columns) to show
    function getColumnCount(song) {
        var MIN_LENGTH = 20;
        var EXTRA_VISIBLE_COLUMNS = 10; // the number of additional columns to show after the last detected note
        var maxNotePosition = 0;
        for (var _i = 0, _a = song.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            maxNotePosition = Math.max(maxNotePosition, note.x);
        }
        return Math.max(maxNotePosition + EXTRA_VISIBLE_COLUMNS, MIN_LENGTH);
    }
    var Editor = function (_a) {
        var activeBeat = _a.activeBeat; _a.activeSongId; var song = _a.song, addNote = _a.addNote, toggleNote = _a.toggleNote, playPreviewNote = _a.playPreviewNote;
        var X_OFFSET = 60;
        var Y_OFFSET = 7;
        var ROW_HEIGHT = 15;
        var ROW_WIDTH = 15;
        var Y_FIX = ROW_HEIGHT; // magic offset # to handle rounding errors when determining which cell is hovered
        var PADDING = 2;
        var _b = React.useState([-1, -1]), hoveredCoords = _b[0], setHoveredCoords = _b[1];
        var canvasRef = React.useRef(null);
        React.useEffect(function () {
            var canvas = canvasRef.current;
            if (canvas === null)
                return;
            var isPainting = false;
            var hoveredX = hoveredCoords[0], hoveredY = hoveredCoords[1];
            var paint = function (event) {
                var _a;
                var x = event.offsetX - canvas.offsetLeft;
                var y = event.offsetY - canvas.offsetTop;
                var xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
                var yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);
                if (xCoord < 0 || yCoord < 0)
                    return;
                setHoveredCoords([xCoord, yCoord]);
                if (!isPainting)
                    return;
                var pitch = fullScale[yCoord];
                var existingNote = song.notes.find(function (note) { return note.pitch === pitch && note.x === xCoord; });
                if (!existingNote) {
                    // add-only mode when dragging, no removal:
                    addNote({ x: xCoord, pitch: pitch, duration: 1 });
                    // only play the preview note if we've hovered to a new cell
                    // (avoids repeating the same note when dragging within a cell)
                    if (hoveredX !== xCoord || hoveredY !== yCoord) {
                        playPreviewNote(pitch);
                    }
                }
                _a = [xCoord, yCoord], hoveredX = _a[0], hoveredY = _a[1];
            };
            var startPaint = function (event) {
                var _a;
                isPainting = true;
                var x = event.offsetX - canvas.offsetLeft;
                var y = event.offsetY - canvas.offsetTop;
                var xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
                var yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);
                if (xCoord < 0 || yCoord < 0)
                    return;
                var pitch = fullScale[yCoord];
                // toggle mode when dragging (can add OR remove notes, determined by prior state):
                toggleNote({ x: xCoord, pitch: pitch, duration: 1 });
                playPreviewNote(pitch);
                _a = [xCoord, yCoord], hoveredX = _a[0], hoveredY = _a[1];
            };
            var stopPaint = function (event) {
                var _a;
                isPainting = false;
                setHoveredCoords([-1, -1]);
                _a = [-1, -1], hoveredX = _a[0], hoveredY = _a[1];
            };
            canvas.addEventListener('mousedown', startPaint);
            canvas.addEventListener('mousemove', paint);
            canvas.addEventListener('mouseleave', stopPaint);
            canvas.addEventListener('mouseup', stopPaint);
            return function () {
                canvas.removeEventListener('mousedown', startPaint);
                canvas.removeEventListener('mousemove', paint);
                canvas.removeEventListener('mouseleave', stopPaint);
                canvas.removeEventListener('mouseup', stopPaint);
            };
        }, []);
        React.useEffect(function () {
            var canvas = canvasRef.current;
            if (canvas === null)
                return;
            var ctx = canvas.getContext('2d');
            if (ctx === null)
                return;
            var columns = getColumnCount(song);
            // create a high DPI canvas based on devicePixelRatio:
            {
                var pixelRatio = window.devicePixelRatio || 1;
                var height = fullScale.length * (ROW_HEIGHT + PADDING) + Y_OFFSET;
                var width = columns * (ROW_WIDTH + PADDING * 2) + X_OFFSET;
                canvas.height = height * pixelRatio;
                canvas.width = width * pixelRatio;
                canvas.style.height = height + "px";
                canvas.style.width = width + "px";
                ctx.scale(pixelRatio, pixelRatio);
            }
            // piano keys
            {
                var keys = {
                    black: {
                        color: '#000',
                        offset: 5,
                        height: 4,
                        width: 6
                    },
                    white: {
                        color: '#fff',
                        offset: 5,
                        height: 5,
                        width: 12
                    }
                };
                for (var i = 0; i < fullScale.length; i++) {
                    var pitch = fullScale[i];
                    var key = (pitch.includes('#') || pitch.includes('b')) ? keys.black : keys.white;
                    ctx.fillStyle = key.color;
                    var x = 0;
                    var y = (ROW_HEIGHT + PADDING) * (i + 1) - key.offset;
                    ctx.fillRect(x, y, key.width, key.height);
                }
            }
            // write each note name in the first column:
            {
                ctx.font = '12px monospace';
                ctx.fillStyle = '#677fa1';
                for (var i = 0; i < fullScale.length; i++) {
                    var pitch = fullScale[i];
                    var x = 20;
                    var y = (ROW_HEIGHT + PADDING) * (i + 1);
                    ctx.fillText(formatPitch(pitch), x, y);
                }
            }
            // draw a grid of empty squares, with some highlighted for :hover:
            {
                var hoveredX = hoveredCoords[0], hoveredY = hoveredCoords[1];
                for (var y = 0; y < fullScale.length; y++) {
                    for (var x = 0; x < columns; x++) {
                        var v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
                        var h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
                        ctx.fillStyle = (x === hoveredX && y === hoveredY) ? '#8699b5' : (x === activeBeat || x === hoveredX || y === hoveredY) ? '#b5c2d2' : '#c5cfdc';
                        ctx.fillRect(h, v, ROW_WIDTH, ROW_HEIGHT);
                    }
                }
            }
            // fill in the squares for the song's notes:
            {
                ctx.fillStyle = '#00a9ff';
                for (var _i = 0, _a = song.notes; _i < _a.length; _i++) {
                    var note = _a[_i];
                    var x = note.x, duration = note.duration, pitch = note.pitch;
                    var y = fullScaleToYCoord[pitch];
                    var v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
                    var h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
                    var width = (ROW_WIDTH * duration) + (PADDING * (duration - 1));
                    ctx.fillRect(h, v, width, ROW_HEIGHT);
                }
            }
        }, [song, hoveredCoords, activeBeat]);
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Editor" },
                React.createElement("canvas", { id: "canvas", ref: canvasRef })));
    };

    function useSpinner(value, action) {
        var _a = React.useState(false), isSpinning = _a[0], setIsSpinning = _a[1];
        var rafId = React.useRef();
        var timeoutId = React.useRef();
        React.useEffect(function () {
            var spin = function () {
                if (isSpinning) {
                    action();
                    rafId.current = requestAnimationFrame(spin);
                }
            };
            rafId.current = requestAnimationFrame(spin);
            return function () {
                if (rafId.current !== undefined) {
                    cancelAnimationFrame(rafId.current);
                }
            };
        }, [value, isSpinning]);
        return {
            start: function () {
                action();
                timeoutId.current = setTimeout(function () {
                    setIsSpinning(true);
                }, 300);
            },
            stop: function () {
                setIsSpinning(false);
                if (rafId.current) {
                    cancelAnimationFrame(rafId.current);
                }
                clearTimeout(timeoutId.current);
            }
        };
    }
    var Tempo = function (_a) {
        var bpm = _a.bpm, updateBpm = _a.updateBpm;
        var _b = React.useState(false); _b[0]; _b[1];
        var increment = useSpinner(bpm, function () { return updateBpm(bpm + 1); });
        var decrement = useSpinner(bpm, function () { return updateBpm(bpm - 1); });
        React.useEffect(function () {
            var onMouseUp = function () {
                increment.stop();
                decrement.stop();
            };
            document.addEventListener('mouseup', onMouseUp);
            return function () {
                document.removeEventListener('mouseup', onMouseUp);
            };
        }, []);
        return React.createElement(React.Fragment, null,
            React.createElement("input", { className: "Tempo-input", type: "number", maxLength: 3, value: bpm.toString(), onInput: function (event) {
                    updateBpm(event.target.valueAsNumber);
                } }),
            React.createElement("span", { className: "Tempo-label" }, "bpm"),
            React.createElement("div", { className: "Tempo-controls" },
                React.createElement("button", { onMouseDown: increment.start },
                    React.createElement(Icon, { name: "increment" })),
                React.createElement("button", { onMouseDown: decrement.start },
                    React.createElement(Icon, { name: "decrement" }))));
    };

    var Header = function (_a) {
        var song = _a.song, updateSong = _a.updateSong, instruments = _a.instruments;
        return React.createElement(React.Fragment, null,
            React.createElement("header", { className: "Header" },
                React.createElement("input", { className: "Header-title", placeholder: "Name your song...", value: song.title, onInput: function (event) {
                        var title = event.target.value;
                        updateSong(song.id, { title: title });
                    } }),
                React.createElement("div", null,
                    React.createElement("select", { value: song.instrumentId, className: "mR10", onChange: function (event) {
                            for (var _i = 0, instruments_1 = instruments; _i < instruments_1.length; _i++) {
                                var instrument = instruments_1[_i];
                                instrument.wad.stop();
                                if (instrument.id === event.target.value) {
                                    instrument.wad.play();
                                    updateSong(song.id, { instrumentId: instrument.id });
                                }
                            }
                        } },
                        React.createElement("optgroup", { label: "Instruments" }, instruments.map(function (instrument) { return (React.createElement("option", { value: instrument.id, key: instrument.id }, instrument.id)); }))),
                    React.createElement(Tempo, { bpm: song.bpm, updateBpm: function (bpm) {
                            updateSong(song.id, { bpm: bpm });
                        } }))));
    };

    var Sidebar = function (_a) {
        var songs = _a.songs, activeSongId = _a.activeSongId, setActiveSongId = _a.setActiveSongId;
        return React.createElement(React.Fragment, null,
            React.createElement("aside", { className: "Sidebar" },
                React.createElement("div", { className: "Sidebar-heading" }, "Songs"),
                React.createElement("div", { className: "pad20" }, Object.keys(songs).map(function (songId) { return (React.createElement("a", { className: activeSongId === songId ? 'active' : '', href: "#", key: songId, onClick: function (event) {
                        event.preventDefault();
                        setActiveSongId(songId);
                    } }, songs[songId].title || 'Untitled')); }))));
    };

    // const songs = { ...songData };
    function App() {
        var _a = React.useState(__assign({}, songData)), songs = _a[0], setSongs = _a[1];
        var _b = React.useState('New Song'), activeSongId = _b[0], setActiveSongId = _b[1];
        var _c = React.useState(-1), activeBeat = _c[0], setActiveBeat = _c[1];
        var _d = React.useState(false), isPlaying = _d[0], setIsPlaying = _d[1];
        var activeSong = songs[activeSongId];
        var updateSong = function (songId, updates) {
            setSongs(function (songs) {
                var _a;
                var updatedSong = lodash_clonedeep(songs[songId]);
                Object.assign(updatedSong, updates);
                return __assign(__assign({}, songs), (_a = {}, _a[updatedSong.id] = updatedSong, _a));
            });
        };
        var addNote = function (_a) {
            var x = _a.x, pitch = _a.pitch, duration = _a.duration;
            setSongs(function (songs) {
                var _a;
                var updatedSong = lodash_clonedeep(songs[activeSongId]);
                var existingNote = updatedSong.notes.find(function (note) { return note.x === x && note.pitch === pitch; });
                if (!existingNote) {
                    var updatedNotes = __spreadArray(__spreadArray([], updatedSong.notes), [
                        { x: x, pitch: pitch, duration: duration }
                    ]);
                    Object.assign(updatedSong, { notes: updatedNotes });
                    return __assign(__assign({}, songs), (_a = {}, _a[updatedSong.id] = updatedSong, _a));
                }
                return songs;
            });
        };
        var toggleNote = function (_a) {
            var x = _a.x, pitch = _a.pitch, duration = _a.duration;
            setSongs(function (songs) {
                var _a, _b;
                var updatedSong = lodash_clonedeep(songs[activeSongId]);
                var existingNote = updatedSong.notes.find(function (note) { return note.x === x && note.pitch === pitch; });
                // if there was already a note at the provided coordinates, remove it:
                if (existingNote) {
                    var updatedNotes = updatedSong.notes.filter(function (note) { return note !== existingNote; });
                    Object.assign(updatedSong, { notes: updatedNotes });
                    return __assign(__assign({}, songs), (_a = {}, _a[updatedSong.id] = updatedSong, _a));
                }
                // if there was not already a note at the provided coordinates, add it:
                else {
                    var updatedNotes = __spreadArray(__spreadArray([], updatedSong.notes), [
                        { x: x, pitch: pitch, duration: duration }
                    ]);
                    Object.assign(updatedSong, { notes: updatedNotes });
                    return __assign(__assign({}, songs), (_b = {}, _b[updatedSong.id] = updatedSong, _b));
                }
            });
        };
        var playPreviewNote = function (pitch) {
            var instrument = instruments[activeSong.instrumentId];
            if (!instrument)
                return;
            instrument.wad.play({
                pitch: pitch,
                env: { hold: 0.1 }
            });
        };
        var togglePlay = function () {
            if (isPlaying)
                return; // TODO: add pause (or stop) functionality here instead of blocking double play
            setIsPlaying(true);
            var activeInstrument = instruments[activeSong.instrumentId];
            var beatLength = (60 / 4) / activeSong.bpm; // / 4 since it's quarter notes?
            // 1. queue up all the audio to be played at the correct `wait` offset:
            for (var _i = 0, _a = activeSong.notes; _i < _a.length; _i++) {
                var note = _a[_i];
                activeInstrument.wad.play({
                    pitch: note.pitch,
                    wait: beatLength * note.x,
                    env: { hold: note.duration * beatLength }
                });
            }
            // 2. calculate the end timestamp x coordinate:
            var maxBeatX = 0;
            for (var _b = 0, _c = activeSong.notes; _b < _c.length; _b++) {
                var note = _c[_b];
                maxBeatX = Math.max(maxBeatX, note.x + note.duration);
            }
            // 3. update the `activeBeat` on each tick:
            var beat = 0;
            setActiveBeat(beat);
            var interval = setInterval(function () {
                beat++;
                setActiveBeat(beat);
                if (beat >= maxBeatX) {
                    clearInterval(interval);
                    setIsPlaying(false);
                    setActiveBeat(-1);
                }
            }, beatLength * 1000);
        };
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "App" },
                React.createElement(Header, { song: activeSong, updateSong: updateSong, instruments: [
                        instruments['Flute'],
                        instruments['Piano'],
                        instruments['Synth Lead']
                    ] }),
                React.createElement(Sidebar, { activeSongId: activeSongId, setActiveSongId: setActiveSongId, songs: songs }),
                React.createElement(Editor, { activeBeat: activeBeat, activeSongId: activeSongId, song: activeSong, addNote: addNote, toggleNote: toggleNote, playPreviewNote: playPreviewNote }),
                React.createElement(Controls, { activeSongId: activeSongId, updateSong: updateSong, togglePlay: togglePlay })));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

}());
