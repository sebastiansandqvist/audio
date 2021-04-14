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

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var defaults$1 = {
        'New Song': {
            id: 'New Song',
            title: '',
            bpm: 120,
            instrumentId: 'Synth Lead',
            notes: [
            // { pitch: 'D6',  x: 0,  duration: 1 },
            // { pitch: 'D6',  x: 8,  duration: 1 },
            // { pitch: 'D6',  x: 9,  duration: 1 },
            // { pitch: 'D6',  x: 10, duration: 1 },
            // { pitch: 'D6',  x: 11, duration: 1 },
            // { pitch: 'D6',  x: 12, duration: 1 },
            // { pitch: 'C#6', x: 1,  duration: 1 },
            // { pitch: 'C6',  x: 2,  duration: 1 },
            // { pitch: 'B6',  x: 3,  duration: 1 },
            // { pitch: 'Bb6', x: 4,  duration: 1 },
            // { pitch: 'A6',  x: 5,  duration: 2 },
            // { pitch: 'G#5', x: 6,  duration: 3 },
            // { pitch: 'G5',  x: 7,  duration: 3 },
            ]
        },
        // 'Lux Aeterna': {
        //   id: 'Lux Aeterna',
        //   title: 'Lux Aeterna',
        //   bpm: 100,
        //   instrumentId: 'Piano',
        //   notes: [
        //     {"coords":[35,21],"duration": 2,"pitch":"D6"},
        //     {"coords":[43,21],"duration": 2,"pitch":"D6"},
        //     {"coords":[51,21],"duration": 2,"pitch":"D6"},
        //     {"coords":[59,21],"duration": 2,"pitch":"D6"},
        //     {"coords":[33,25],"duration": 2,"pitch":"Bb5"},{"coords":[37,25],"duration": 2,"pitch":"Bb5"},{"coords":[41,25],"duration": 2,"pitch":"Bb5"},{"coords":[45,25],"duration": 2,"pitch":"Bb5"},{"coords":[57,25],"duration": 2,"pitch":"Bb5"},{"coords":[61,25],"duration": 2,"pitch":"Bb5"},{"coords":[49,26],"duration": 2,"pitch":"A5"},{"coords":[53,26],"duration": 2,"pitch":"A5"},{"coords":[137,35],"duration": 1,"pitch":"C5"},{"coords":[138,35],"duration": 1,"pitch":"C5"},{"coords":[169,35],"duration": 1,"pitch":"C5"},{"coords":[170,35],"duration": 1,"pitch":"C5"},{"coords":[173,35],"duration": 1,"pitch":"C5"},{"coords":[174,35],"duration": 1,"pitch":"C5"},{"coords":[57,37],"duration": 6,"pitch":"Bb4"},{"coords":[63,37],"duration": 1,"pitch":"Bb4"},{"coords":[65,37],"duration": 1,"pitch":"Bb4"},{"coords":[71,37],"duration": 1,"pitch":"Bb4"},{"coords":[73,37],"duration": 1,"pitch":"Bb4"},{"coords":[79,37],"duration": 1,"pitch":"Bb4"},{"coords":[81,37],"duration": 1,"pitch":"Bb4"},{"coords":[87,37],"duration": 1,"pitch":"Bb4"},{"coords":[89,37],"duration": 1,"pitch":"Bb4"},{"coords":[91,37],"duration": 1,"pitch":"Bb4"},{"coords":[93,37],"duration": 1,"pitch":"Bb4"},{"coords":[95,37],"duration": 1,"pitch":"Bb4"},{"coords":[97,37],"duration": 1,"pitch":"Bb4"},{"coords":[103,37],"duration": 1,"pitch":"Bb4"},{"coords":[105,37],"duration": 1,"pitch":"Bb4"},{"coords":[111,37],"duration": 1,"pitch":"Bb4"},{"coords":[113,37],"duration": 1,"pitch":"Bb4"},{"coords":[114,37],"duration": 1,"pitch":"Bb4"},{"coords":[121,37],"duration": 1,"pitch":"Bb4"},{"coords":[122,37],"duration": 1,"pitch":"Bb4"},{"coords":[129,37],"duration": 1,"pitch":"Bb4"},{"coords":[130,37],"duration": 1,"pitch":"Bb4"},{"coords":[133,37],"duration": 1,"pitch":"Bb4"},{"coords":[134,37],"duration": 1,"pitch":"Bb4"},{"coords":[139,37],"duration": 1,"pitch":"Bb4"},{"coords":[140,37],"duration": 1,"pitch":"Bb4"},{"coords":[143,37],"duration": 1,"pitch":"Bb4"},{"coords":[144,37],"duration": 1,"pitch":"Bb4"},{"coords":[145,37],"duration": 1,"pitch":"Bb4"},{"coords":[146,37],"duration": 1,"pitch":"Bb4"},{"coords":[153,37],"duration": 1,"pitch":"Bb4"},{"coords":[154,37],"duration": 1,"pitch":"Bb4"},{"coords":[161,37],"duration": 1,"pitch":"Bb4"},{"coords":[162,37],"duration": 1,"pitch":"Bb4"},{"coords":[165,37],"duration": 1,"pitch":"Bb4"},{"coords":[166,37],"duration": 1,"pitch":"Bb4"},{"coords":[177,37],"duration": 1,"pitch":"Bb4"},{"coords":[183,37],"duration": 1,"pitch":"Bb4"},{"coords":[185,37],"duration": 1,"pitch":"Bb4"},{"coords":[191,37],"duration":1,"pitch":"Bb4"},{"coords":[193,37],"duration":1,"pitch":"Bb4"},{"coords":[49,38],"duration": 8,"pitch":"A4"},{"coords":[64,38],"duration": 1,"pitch":"A4"},{"coords":[72,38],"duration": 1,"pitch":"A4"},{"coords":[80,38],"duration": 1,"pitch":"A4"},{"coords":[88,38],"duration": 1,"pitch":"A4"},{"coords":[90,38],"duration": 1,"pitch":"A4"},{"coords":[92,38],"duration": 1,"pitch":"A4"},{"coords":[94,38],"duration": 1,"pitch":"A4"},{"coords":[96,38],"duration": 1,"pitch":"A4"},{"coords":[98,38],"duration": 2,"pitch":"A4"},{"coords":[104,38],"duration": 1,"pitch":"A4"},{"coords":[106,38],"duration": 2,"pitch":"A4"},{"coords":[112,38],"duration": 1,"pitch":"A4"},{"coords":[115,38],"duration": 1,"pitch":"A4"},{"coords":[116,38],"duration": 1,"pitch":"A4"},{"coords":[123,38],"duration": 1,"pitch":"A4"},{"coords":[124,38],"duration": 1,"pitch":"A4"},{"coords":[131,38],"duration": 1,"pitch":"A4"},{"coords":[132,38],"duration": 1,"pitch":"A4"},{"coords":[135,38],"duration": 1,"pitch":"A4"},{"coords":[136,38],"duration": 1,"pitch":"A4"},{"coords":[141,38],"duration": 1,"pitch":"A4"},{"coords":[142,38],"duration": 1,"pitch":"A4"},{"coords":[147,38],"duration": 1,"pitch":"A4"},{"coords":[148,38],"duration": 1,"pitch":"A4"},{"coords":[155,38],"duration": 1,"pitch":"A4"},{"coords":[156,38],"duration": 1,"pitch":"A4"},{"coords":[163,38],"duration": 1,"pitch":"A4"},{"coords":[164,38],"duration": 1,"pitch":"A4"},{"coords":[167,38],"duration": 1,"pitch":"A4"},{"coords":[168,38],"duration": 1,"pitch":"A4"},{"coords":[171,38],"duration": 1,"pitch":"A4"},{"coords":[172,38],"duration": 1,"pitch":"A4"},{"coords":[175,38],"duration": 1,"pitch":"A4"},{"coords":[176,38],"duration": 1,"pitch":"A4"},{"coords":[184,38],"duration": 1,"pitch":"A4"},{"coords":[192,38],"duration":1,"pitch":"A4"},{"coords":[33,40],"duration": 8,"pitch":"G4"},{"coords":[41,40],"duration": 8,"pitch":"G4"},{"coords":[66,40],"duration": 2,"pitch":"G4"},{"coords":[74,40],"duration": 2,"pitch":"G4"},{"coords":[82,40],"duration": 2,"pitch":"G4"},{"coords":[117,40],"duration": 1,"pitch":"G4"},{"coords":[118,40],"duration": 1,"pitch":"G4"},{"coords":[125,40],"duration": 1,"pitch":"G4"},{"coords":[126,40],"duration": 1,"pitch":"G4"},{"coords":[149,40],"duration": 1,"pitch":"G4"},{"coords":[150,40],"duration": 1,"pitch":"G4"},{"coords":[157,40],"duration": 1,"pitch":"G4"},{"coords":[158,40],"duration": 1,"pitch":"G4"},{"coords":[179,40],"duration": 1,"pitch":"G4"},{"coords":[187,40],"duration": 1,"pitch":"G4"},{"coords":[197,40],"duration": 4,"pitch":"G4"},{"coords":[65,45],"duration": 4,"pitch":"D4"},{"coords":[119,45],"duration": 1,"pitch":"D4"},{"coords":[120,45],"duration": 1,"pitch":"D4"},{"coords":[127,45],"duration": 1,"pitch":"D4"},{"coords":[128,45],"duration": 1,"pitch":"D4"},{"coords":[151,45],"duration": 1,"pitch":"D4"},{"coords":[152,45],"duration": 1,"pitch":"D4"},{"coords":[159,45],"duration": 1,"pitch":"D4"},{"coords":[160,45],"duration": 1,"pitch":"D4"},{"coords":[25,47],"duration": 2,"pitch":"C4"},{"coords":[57,47],"duration": 2,"pitch":"C4"},{"coords":[89,47],"duration": 2,"pitch":"C4"},{"coords":[1,49],"duration": 2,"pitch":"Bb3"},{"coords":[9,49],"duration": 2,"pitch":"Bb3"},{"coords":[17,49],"duration": 2,"pitch":"Bb3"},{"coords":[27,49],"duration": 2,"pitch":"Bb3"},{"coords":[31,49],"duration": 2,"pitch":"Bb3"},{"coords":[33,49],"duration": 2,"pitch":"Bb3"},{"coords":[41,49],"duration": 2,"pitch":"Bb3"},{"coords":[49,49],"duration": 2,"pitch":"Bb3"},{"coords":[59,49],"duration": 2,"pitch":"Bb3"},{"coords":[63,49],"duration": 2,"pitch":"Bb3"},{"coords":[65,49],"duration": 2,"pitch":"Bb3"},{"coords":[72,49],"duration": 2,"pitch":"Bb3"},{"coords":[77,49],"duration": 1,"pitch":"Bb3"},{"coords":[81,49],"duration": 2,"pitch":"Bb3"},{"coords":[91,49],"duration": 2,"pitch":"Bb3"},{"coords":[95,49],"duration": 2,"pitch":"Bb3"},{"coords":[3,50],"duration": 2,"pitch":"A3"},{"coords":[11,50],"duration": 2,"pitch":"A3"},{"coords":[19,50],"duration": 2,"pitch":"A3"},{"coords":[29,50],"duration": 2,"pitch":"A3"},{"coords":[35,50],"duration": 2,"pitch":"A3"},{"coords":[43,50],"duration": 2,"pitch":"A3"},{"coords":[51,50],"duration": 2,"pitch":"A3"},{"coords":[61,50],"duration": 2,"pitch":"A3"},{"coords":[67,50],"duration": 2,"pitch":"A3"},{"coords":[74,50],"duration": 2,"pitch":"A3"},{"coords":[83,50],"duration": 2,"pitch":"A3"},{"coords":[93,50],"duration": 2,"pitch":"A3"},{"coords":[5,52],"duration": 2,"pitch":"G3"},{"coords":[13,52],"duration": 2,"pitch":"G3"},{"coords":[21,52],"duration": 2,"pitch":"G3"},{"coords":[37,52],"duration": 2,"pitch":"G3"},{"coords":[45,52],"duration": 2,"pitch":"G3"},{"coords":[53,52],"duration": 2,"pitch":"G3"},{"coords":[69,52],"duration": 2,"pitch":"G3"},{"coords":[76,52],"duration": 2,"pitch":"G3"},{"coords":[85,52],"duration": 2,"pitch":"G3"},{"coords":[4,57],"duration": 1,"pitch":"D3"},{"coords":[7,57],"duration": 2,"pitch":"D3"},{"coords":[12,57],"duration": 1,"pitch":"D3"},{"coords":[15,57],"duration": 2,"pitch":"D3"},{"coords":[21,57],"duration": 1,"pitch":"D3"},{"coords":[23,57],"duration": 2,"pitch":"D3"},{"coords":[28,57],"duration": 1,"pitch":"D3"},{"coords":[30,57],"duration": 1,"pitch":"D3"},{"coords":[39,57],"duration": 2,"pitch":"D3"},{"coords":[47,57],"duration": 2,"pitch":"D3"},{"coords":[55,57],"duration": 2,"pitch":"D3"},{"coords":[68,57],"duration": 1,"pitch":"D3"},{"coords":[70,57],"duration": 1,"pitch":"D3"},{"coords":[71,57],"duration": 2,"pitch":"D3"},{"coords":[76,57],"duration": 1,"pitch":"D3"},{"coords":[78,57],"duration": 1,"pitch":"D3"},{"coords":[79,57],"duration": 2,"pitch":"D3"},{"coords":[87,57],"duration": 2,"pitch":"D3"},{"coords":[3,61],"duration": 1,"pitch":"Bb2"},{"coords":[5,61],"duration": 1,"pitch":"Bb2"},{"coords":[11,61],"duration": 1,"pitch":"Bb2"},{"coords":[13,61],"duration": 1,"pitch":"Bb2"},{"coords":[20,61],"duration": 1,"pitch":"Bb2"},{"coords":[22,61],"duration": 1,"pitch":"Bb2"},{"coords":[27,61],"duration": 1,"pitch":"Bb2"},{"coords":[31,61],"duration": 1,"pitch":"Bb2"},{"coords":[57,61],"duration": 1,"pitch":"Bb2"},{"coords":[58,61],"duration": 1,"pitch":"Bb2"},{"coords":[59,61],"duration": 1,"pitch":"Bb2"},{"coords":[60,61],"duration": 1,"pitch":"Bb2"},{"coords":[61,61],"duration": 1,"pitch":"Bb2"},{"coords":[62,61],"duration": 1,"pitch":"Bb2"},{"coords":[63,61],"duration": 1,"pitch":"Bb2"},{"coords":[64,61],"duration": 1,"pitch":"Bb2"},{"coords":[67,61],"duration": 1,"pitch":"Bb2"},{"coords":[71,61],"duration": 1,"pitch":"Bb2"},{"coords":[75,61],"duration": 1,"pitch":"Bb2"},{"coords":[79,61],"duration": 1,"pitch":"Bb2"},{"coords":[1,64],"duration": 1,"pitch":"G2"},{"coords":[2,64],"duration": 1,"pitch":"G2"},{"coords":[3,64],"duration": 3,"pitch":"G2"},{"coords":[6,64],"duration": 1,"pitch":"G2"},{"coords":[7,64],"duration": 3,"pitch":"G2"},{"coords":[10,64],"duration": 1,"pitch":"G2"},{"coords":[11,64],"duration": 3,"pitch":"G2"},{"coords":[14,64],"duration": 1,"pitch":"G2"},{"coords":[19,64],"duration": 1,"pitch":"G2"},{"coords":[23,64],"duration": 1,"pitch":"G2"},{"coords":[26,64],"duration": 1,"pitch":"G2"},{"coords":[30,64],"duration": 1,"pitch":"G2"},{"coords":[32,64],"duration": 1,"pitch":"G2"},{"coords":[33,64],"duration": 1,"pitch":"G2"},{"coords":[66,64],"duration": 1,"pitch":"G2"},{"coords":[69,64],"duration": 1,"pitch":"G2"},{"coords":[72,64],"duration": 1,"pitch":"G2"},{"coords":[74,64],"duration": 1,"pitch":"G2"},{"coords":[80,64],"duration": 1,"pitch":"G2"},{"coords":[17,68],"duration": 4,"pitch":"D#2"},{"coords":[21,68],"duration": 4,"pitch":"D#2"},{"coords":[49,68],"duration": 1,"pitch":"D#2"},{"coords":[50,68],"duration": 1,"pitch":"D#2"},{"coords":[51,68],"duration": 1,"pitch":"D#2"},{"coords":[52,68],"duration": 1,"pitch":"D#2"},{"coords":[53,68],"duration": 1,"pitch":"D#2"},{"coords":[54,68],"duration": 1,"pitch":"D#2"},{"coords":[55,68],"duration": 1,"pitch":"D#2"},{"coords":[56,68],"duration": 1,"pitch":"D#2"},{"coords":[1,69],"duration": 1,"pitch":"D2"},{"coords":[7,69],"duration": 1,"pitch":"D2"},{"coords":[8,69],"duration": 1,"pitch":"D2"},{"coords":[9,69],"duration": 1,"pitch":"D2"},{"coords":[15,69],"duration": 1,"pitch":"D2"},{"coords":[16,69],"duration": 1,"pitch":"D2"},{"coords":[18,69],"duration": 1,"pitch":"D2"},{"coords":[24,69],"duration": 1,"pitch":"D2"},{"coords":[25,69],"duration": 1,"pitch":"D2"},{"coords":[26,69],"duration": 5,"pitch":"D2"},{"coords":[31,69],"duration": 1,"pitch":"D2"},{"coords":[32,69],"duration": 1,"pitch":"D2"},{"coords":[57,69],"duration": 1,"pitch":"D2"},{"coords":[58,69],"duration": 1,"pitch":"D2"},{"coords":[59,69],"duration": 1,"pitch":"D2"},{"coords":[60,69],"duration": 1,"pitch":"D2"},{"coords":[61,69],"duration": 1,"pitch":"D2"},{"coords":[62,69],"duration": 1,"pitch":"D2"},{"coords":[63,69],"duration": 1,"pitch":"D2"},{"coords":[64,69],"duration": 1,"pitch":"D2"},{"coords":[65,69],"duration": 3,"pitch":"D2"},{"coords":[68,69],"duration": 1,"pitch":"D2"},{"coords":[69,69],"duration": 1,"pitch":"D2"},{"coords":[70,69],"duration": 1,"pitch":"D2"},{"coords":[71,69],"duration": 1,"pitch":"D2"},{"coords":[72,69],"duration": 1,"pitch":"D2"},{"coords":[73,69],"duration": 1,"pitch":"D2"},{"coords":[74,69],"duration": 6,"pitch":"D2"},{"coords":[80,69],"duration": 1,"pitch":"D2"},{"coords":[82,69],"duration": 1,"pitch":"D2"},{"coords":[17,73],"duration": 1,"pitch":"Bb1"},{"coords":[67,73],"duration": 1,"pitch":"Bb1"},{"coords":[71,73],"duration": 1,"pitch":"Bb1"},{"coords":[81,73],"duration": 1,"pitch":"Bb1"},{"coords":[33,76],"duration": 1,"pitch":"G1"},{"coords":[34,76],"duration": 1,"pitch":"G1"},{"coords":[35,76],"duration": 1,"pitch":"G1"},{"coords":[36,76],"duration": 1,"pitch":"G1"},{"coords":[37,76],"duration": 1,"pitch":"G1"},{"coords":[38,76],"duration": 1,"pitch":"G1"},{"coords":[39,76],"duration": 1,"pitch":"G1"},{"coords":[40,76],"duration": 1,"pitch":"G1"},{"coords":[41,76],"duration": 1,"pitch":"G1"},{"coords":[42,76],"duration": 1,"pitch":"G1"},{"coords":[43,76],"duration": 1,"pitch":"G1"},{"coords":[44,76],"duration": 1,"pitch":"G1"},{"coords":[45,76],"duration": 1,"pitch":"G1"},{"coords":[46,76],"duration": 1,"pitch":"G1"},{"coords":[47,76],"duration": 1,"pitch":"G1"},{"coords":[48,76],"duration": 1,"pitch":"G1"},{"coords":[64,76],"duration": 1,"pitch":"G1"},{"coords":[65,76],"duration": 1,"pitch":"G1"},{"coords":[66,76],"duration": 1,"pitch":"G1"},{"coords":[67,76],"duration": 1,"pitch":"G1"},{"coords":[68,76],"duration": 1,"pitch":"G1"},{"coords":[69,76],"duration": 1,"pitch":"G1"},{"coords":[70,76],"duration": 1,"pitch":"G1"},{"coords":[71,76],"duration": 1,"pitch":"G1"},{"coords":[72,76],"duration": 1,"pitch":"G1"},{"coords":[73,76],"duration": 1,"pitch":"G1"},{"coords":[74,76],"duration": 1,"pitch":"G1"},{"coords":[75,76],"duration": 1,"pitch":"G1"},{"coords":[76,76],"duration": 1,"pitch":"G1"},{"coords":[77,76],"duration": 1,"pitch":"G1"},{"coords":[78,76],"duration": 1,"pitch":"G1"},{"coords":[79,76],"duration": 1,"pitch":"G1"},{"coords":[49,80],"duration": 1,"pitch":"D#1"},{"coords":[50,80],"duration": 1,"pitch":"D#1"},{"coords":[51,80],"duration": 1,"pitch":"D#1"},{"coords":[52,80],"duration": 1,"pitch":"D#1"},{"coords":[53,80],"duration": 1,"pitch":"D#1"},{"coords":[54,80],"duration": 1,"pitch":"D#1"},{"coords":[55,80],"duration": 1,"pitch":"D#1"},{"coords":[56,80],"duration": 1,"pitch":"D#1"},{"coords":[80,80],"duration": 1,"pitch":"D#1"},{"coords":[81,80],"duration": 1,"pitch":"D#1"},{"coords":[82,80],"duration": 1,"pitch":"D#1"},{"coords":[83,80],"duration": 1,"pitch":"D#1"},{"coords":[84,80],"duration": 1,"pitch":"D#1"},{"coords":[85,80],"duration": 1,"pitch":"D#1"},{"coords":[86,80],"duration": 1,"pitch":"D#1"},{"coords":[87,80],"duration": 1,"pitch":"D#1"},{"coords":[57,81],"duration": 1,"pitch":"D1"},{"coords":[58,81],"duration": 1,"pitch":"D1"},{"coords":[59,81],"duration": 1,"pitch":"D1"},{"coords":[60,81],"duration": 1,"pitch":"D1"},{"coords":[61,81],"duration": 1,"pitch":"D1"},{"coords":[62,81],"duration": 1,"pitch":"D1"},{"coords":[63,81],"duration": 1,"pitch":"D1"},{"coords":[64,81],"duration": 1,"pitch":"D1"},{"coords":[88,81],"duration": 1,"pitch":"D1"},{"coords":[89,81],"duration": 1,"pitch":"D1"},{"coords":[90,81],"duration": 1,"pitch":"D1"},{"coords":[91,81],"duration": 1,"pitch":"D1"},{"coords":[92,81],"duration": 1,"pitch":"D1"},{"coords":[93,81],"duration": 1,"pitch":"D1"},{"coords":[94,81],"duration": 1,"pitch":"D1"},{"coords":[95,81],"duration": 1,"pitch":"D1"}
        //   ]
        // },
        // 'Mario': {
        //   id: 'Mario',
        //   title: 'Theme from Super Mario',
        //   bpm: 120,
        //   instrumentId: 'Synth Lead',
        //   notes: [{"coords":[9,28], "duration": 1,"pitch":"G5"},{"coords":[1,31], "duration": 1,"pitch":"E5"},{"coords":[2,31], "duration": 1,"pitch":"E5"},{"coords":[4,31], "duration": 1,"pitch":"E5"},{"coords":[7,31], "duration": 1,"pitch":"E5"},{"coords":[6,35], "duration": 1,"pitch":"C5"},{"coords":[17,35], "duration":1,"pitch":"C5"},{"coords":[9,36], "duration": 1,"pitch":"B4"},{"coords":[28,36], "duration":1,"pitch":"B4"},{"coords":[30,37], "duration":1,"pitch":"Bb4"},{"coords":[26,38], "duration":1,"pitch":"A4"},{"coords":[31,38], "duration":1,"pitch":"A4"},{"coords":[9,40], "duration": 1,"pitch":"G4"},{"coords":[13,40], "duration":1,"pitch":"G4"},{"coords":[20,40], "duration":1,"pitch":"G4"},{"coords":[33,40], "duration": 2,"pitch":"G4"},{"coords":[1,41], "duration": 1,"pitch":"F#4"},{"coords":[2,41], "duration": 1,"pitch":"F#4"},{"coords":[4,41], "duration": 1,"pitch":"F#4"},{"coords":[6,41], "duration": 1,"pitch":"F#4"},{"coords":[7,41], "duration": 1,"pitch":"F#4"},{"coords":[17,43], "duration":1,"pitch":"E4"},{"coords":[23,43], "duration":1,"pitch":"E4"},{"coords":[28,45], "duration":1,"pitch":"D4"},{"coords":[30,46], "duration":1,"pitch":"C#4"},{"coords":[20,47], "duration":1,"pitch":"C4"},{"coords":[26,47], "duration":1,"pitch":"C4"},{"coords":[31,47], "duration":1,"pitch":"C4"},{"coords":[33,47], "duration": 2,"pitch":"C4"},{"coords":[13,52], "duration":1,"pitch":"G3"},{"coords":[17,52], "duration":1,"pitch":"G3"},{"coords":[23,52], "duration":1,"pitch":"G3"},{"coords":[28,52], "duration":1,"pitch":"G3"},{"coords":[30,53], "duration":1,"pitch":"F#3"},{"coords":[26,54], "duration":1,"pitch":"F3"},{"coords":[31,54], "duration":1,"pitch":"F3"},{"coords":[20,55], "duration":1,"pitch":"E3"},{"coords":[33,55], "duration": 2,"pitch":"E3"},{"coords":[1,57], "duration": 1,"pitch":"D3"},{"coords":[2,57], "duration": 1,"pitch":"D3"},{"coords":[4,57], "duration": 1,"pitch":"D3"},{"coords":[6,57], "duration": 1,"pitch":"D3"},{"coords":[7,57], "duration": 1,"pitch":"D3"},{"coords":[23,58], "duration":1,"pitch":"C#3"}]
        // },
        // 'Twinkle': {
        //   id: 'Twinkle',
        //   title: 'Twinkle Twinkle Little Star',
        //   bpm: 80,
        //   instrumentId: 'Piano',
        //   notes: [{"coords":[5,22],"duration": 1,"pitch":"A4"},{"coords":[6,22],"duration": 1,"pitch":"A4"},{"coords":[37,22],"duration": 1,"pitch":"A4"},{"coords":[38,22],"duration": 1,"pitch":"A4"},{"coords":[3,23],"duration": 1,"pitch":"G4"},{"coords":[4,23],"duration": 1,"pitch":"G4"},{"coords":[7,23],"duration": 2,"pitch":"G4"},{"coords":[17,23],"duration": 1,"pitch":"G4"},{"coords":[18,23],"duration": 1,"pitch":"G4"},{"coords":[25,23],"duration": 1,"pitch":"G4"},{"coords":[26,23],"duration": 1,"pitch":"G4"},{"coords":[35,23],"duration": 1,"pitch":"G4"},{"coords":[36,23],"duration": 1,"pitch":"G4"},{"coords":[39,23],"duration": 2,"pitch":"G4"},{"coords":[9,24],"duration": 1,"pitch":"F4"},{"coords":[10,24],"duration": 1,"pitch":"F4"},{"coords":[19,24],"duration": 1,"pitch":"F4"},{"coords":[20,24],"duration": 1,"pitch":"F4"},{"coords":[27,24],"duration": 1,"pitch":"F4"},{"coords":[28,24],"duration": 1,"pitch":"F4"},{"coords":[41,24],"duration": 1,"pitch":"F4"},{"coords":[42,24],"duration": 1,"pitch":"F4"},{"coords":[11,25],"duration": 1,"pitch":"E4"},{"coords":[12,25],"duration": 1,"pitch":"E4"},{"coords":[21,25],"duration": 1,"pitch":"E4"},{"coords":[22,25],"duration": 1,"pitch":"E4"},{"coords":[29,25],"duration": 1,"pitch":"E4"},{"coords":[30,25],"duration": 1,"pitch":"E4"},{"coords":[43,25],"duration": 1,"pitch":"E4"},{"coords":[44,25],"duration": 1,"pitch":"E4"},{"coords":[13,26],"duration": 1,"pitch":"D4"},{"coords":[14,26],"duration": 1,"pitch":"D4"},{"coords":[23,26],"duration": 2,"pitch":"D4"},{"coords":[31,26],"duration": 2,"pitch":"D4"},{"coords":[45,26],"duration": 1,"pitch":"D4"},{"coords":[46,26],"duration": 1,"pitch":"D4"},{"coords":[1,27],"duration": 1,"pitch":"C4"},{"coords":[2,27],"duration": 1,"pitch":"C4"},{"coords":[15,27],"duration": 2,"pitch":"C4"},{"coords":[33,27],"duration": 1,"pitch":"C4"},{"coords":[34,27],"duration": 1,"pitch":"C4"},{"coords":[47,27],"duration": 2,"pitch":"C4"}]
        // }
    };

    var defaults = {
        'Flute': {
            id: 'Flute',
            wad: new Wad({
                source: 'triangle',
                pitch: 'C5',
                env: {
                    attack: 0.1,
                    decay: 0.1,
                    hold: 0.4,
                    sustain: 0.4,
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
                    magnitude: 4
                }
            })
        },
        'Piano': {
            id: 'Piano',
            wad: new Wad({
                source: 'square',
                pitch: 'C4',
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

    function useSpinner(value, action) {
        var _a = React.useState(false), isSpinning = _a[0], setIsSpinning = _a[1];
        // const [runOnce, setRunOnce] = React.useState(true);
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
                        updateSong(__assign(__assign({}, song), { title: event.target.value }));
                    } }),
                React.createElement("div", null,
                    React.createElement("select", { value: song.instrumentId, className: "mR10", onChange: function (event) {
                            for (var _i = 0, instruments_1 = instruments; _i < instruments_1.length; _i++) {
                                var instrument_1 = instruments_1[_i];
                                instrument_1.wad.stop();
                                if (instrument_1.id === event.target.value) {
                                    instrument_1.wad.play();
                                    updateSong(__assign(__assign({}, song), { instrumentId: event.target.value }));
                                }
                            }
                        } },
                        React.createElement("optgroup", { label: "Instruments" }, instruments.map(function (instrument) { return (React.createElement("option", { value: instrument.id, key: instrument.id }, instrument.id)); }))),
                    React.createElement(Tempo, { bpm: song.bpm, updateBpm: function (bpm) {
                            updateSong(__assign(__assign({}, song), { bpm: bpm }));
                        } }))));
    };
    var Sidebar = function (_a) {
        var songs = _a.songs, activeSong = _a.activeSong, setActiveSong = _a.setActiveSong;
        return React.createElement(React.Fragment, null,
            React.createElement("aside", { className: "Sidebar" },
                React.createElement("div", { className: "Sidebar-heading" }, "Songs"),
                React.createElement("div", { className: "pad20" }, songs.map(function (song) { return (React.createElement("a", { className: activeSong.id === song.id ? 'active' : '', href: "#", key: song.id, onClick: function (event) {
                        event.preventDefault();
                        setActiveSong(song);
                    } }, song.title || 'Untitled')); }))));
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
        var song = _a.song, updateSong = _a.updateSong;
        var X_OFFSET = 60;
        var Y_OFFSET = 10;
        var ROW_HEIGHT = 20;
        var ROW_WIDTH = 20;
        var PADDING = 4;
        var _b = React.useState(-1), hoveredX = _b[0], setHoveredX = _b[1];
        var _c = React.useState(-1), hoveredY = _c[0], setHoveredY = _c[1];
        var canvasRef = React.useRef(null);
        React.useEffect(function () {
            var canvas = canvasRef.current;
            if (canvas === null)
                return;
            var isPainting = false;
            var x = 0;
            var y = 0;
            // let priorX = -1;
            // let priorY = -1;
            var paint = function (event) {
                var newX = event.offsetX - canvas.offsetLeft;
                var newY = event.offsetY - canvas.offsetTop;
                var xCoord = Math.round(newX / (ROW_WIDTH + PADDING)) - 3;
                var yCoord = Math.round(newY / (ROW_HEIGHT + PADDING)) - 1;
                if (xCoord < 0 || yCoord < 0)
                    return;
                setHoveredX(xCoord);
                setHoveredY(yCoord);
                if (!isPainting)
                    return;
                {
                    // add only mode when dragging, no removal:
                    var pitch_1 = fullScale[yCoord];
                    var existingNote = song.notes.find(function (note) { return note.pitch === pitch_1 && note.x === xCoord; });
                    if (!existingNote) {
                        song.notes.push({
                            x: xCoord,
                            pitch: pitch_1,
                            duration: 1
                        });
                        updateSong(__assign({}, song));
                    }
                }
                x = newX;
                y = newY;
            };
            var startPaint = function (event) {
                isPainting = true;
                x = event.offsetX - canvas.offsetLeft;
                y = event.offsetY - canvas.offsetTop;
                var xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - 3;
                var yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - 1;
                if (xCoord < 0 || yCoord < 0)
                    return;
                {
                    var pitch_2 = fullScale[yCoord];
                    var existingNoteIndex = song.notes.findIndex(function (note) { return note.pitch === pitch_2 && note.x === xCoord; });
                    if (existingNoteIndex === -1) {
                        song.notes.push({
                            x: xCoord,
                            pitch: pitch_2,
                            duration: 1
                        });
                    }
                    else {
                        // clicking an already existing note will toggle it off
                        song.notes.splice(existingNoteIndex, 1);
                    }
                    updateSong(__assign({}, song));
                }
            };
            var stopPaint = function (event) {
                isPainting = false;
                x = 0;
                y = 0;
                setHoveredX(-1);
                setHoveredY(-1);
                // priorX = -1;
                // priorY = -1;
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
            // draw a grid of empty squares:
            {
                for (var y = 0; y < fullScale.length; y++) {
                    for (var x = 0; x < columns; x++) {
                        var v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
                        var h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
                        ctx.fillStyle = (x === hoveredX && y === hoveredY) ? '#8699b5' : (x === hoveredX || y === hoveredY) ? '#b5c2d2' : '#c5cfdc';
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
        }, [song, hoveredX, hoveredY]);
        // const grid = React.useMemo(() => {
        //   // where the key is `${pitch}${x}`
        //   const noteByCoord = new Map<string, song.NoteV2>();
        //   const MIN_LENGTH = 30;
        //   const PADDING = 10;
        //   let max = 0;
        //   for (const note of song.notes) {
        //     max = Math.max(max, note.x);
        //     noteByCoord.set(`${note.pitch}${note.x}`, note);
        //   }
        //   const length = Math.max(max + PADDING, MIN_LENGTH);
        //   const result: { pitch: string, duration: number, x: number, hasValue: boolean }[][] = [];
        //   for (let y = 0; y < fullScale.length; y++) {
        //     const pitch = fullScale[y];
        //     const row: { pitch: string, duration: number, x: number, y: number, hasValue: boolean }[] = [];
        //     for (let x = 0; x < length;) {
        //       const key = `${pitch}${x}`;
        //       const note = noteByCoord.get(key);
        //       if (note) {
        //         row.push({ pitch, duration: note.duration, x, y, hasValue: true });
        //         x += note.duration;
        //       }
        //       else {
        //         row.push({ pitch, duration: 1, x, y, hasValue: false });
        //         x += 1;
        //       }
        //     }
        //     result.push(row);
        //   }
        //   return result;
        // }, [song]);
        // console.log({ grid, length });
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Editor" },
                React.createElement("canvas", { id: "canvas", ref: canvasRef })));
    };
    var Controls = function (_a) {
        var song = _a.song, updateSong = _a.updateSong, togglePlay = _a.togglePlay;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Controls" },
                React.createElement("button", { className: "Control-play", onClick: togglePlay },
                    React.createElement(Icon, { name: "play", size: 18 })),
                React.createElement("div", null,
                    React.createElement("button", { className: "button mR20", onClick: function () {
                            song.notes.length = 0;
                            updateSong(__assign({}, song));
                        } }, "Clear"))));
    };
    // const songs = [song.defaults['Lux Aeterna'], song.defaults['Mario'], song.defaults['Twinkle']];
    var songs = [defaults$1['New Song']];
    function App() {
        var _this = this;
        var _a = React.useState(songs[0]), activeSong = _a[0], setActiveSong = _a[1];
        var updateSong = function (song) {
            var priorSongIndex = songs.findIndex(function (x) { return x.id === song.id; });
            var priorSong = songs[priorSongIndex];
            if (!priorSong)
                return;
            songs.splice(priorSongIndex, 1, song);
            setActiveSong(song);
        };
        var togglePlay = function () { return __awaiter(_this, void 0, void 0, function () {
            var activeInstrument, beatLength, _i, _a, note;
            return __generator(this, function (_b) {
                activeInstrument = defaults[activeSong.instrumentId];
                beatLength = (60 / 4) / activeSong.bpm;
                for (_i = 0, _a = activeSong.notes; _i < _a.length; _i++) {
                    note = _a[_i];
                    activeInstrument.wad.play({
                        pitch: note.pitch,
                        wait: beatLength * note.x,
                        env: { hold: note.duration * beatLength }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "App" },
                React.createElement(Header, { song: activeSong, updateSong: updateSong, instruments: [
                        defaults['Flute'],
                        defaults['Piano'],
                        defaults['Synth Lead']
                    ] }),
                React.createElement(Sidebar, { songs: songs, activeSong: activeSong, setActiveSong: setActiveSong }),
                React.createElement(Editor, { song: activeSong, updateSong: updateSong }),
                React.createElement(Controls, { song: activeSong, updateSong: updateSong, togglePlay: togglePlay })));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

}());
