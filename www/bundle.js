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
            // { pitch: 'G5',  x: 7,  duration: 3 },
            ]
        },
        'Lux Aeterna': {
            id: 'Lux Aeterna',
            title: 'Lux Aeterna',
            bpm: 100,
            instrumentId: 'Piano',
            notes: [{ 'pitch': 'D6', 'x': 35, 'duration': 2 }, { 'pitch': 'D6', 'x': 43, 'duration': 2 }, { 'pitch': 'D6', 'x': 51, 'duration': 2 }, { 'pitch': 'D6', 'x': 59, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 33, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 37, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 41, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 45, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 57, 'duration': 2 }, { 'pitch': 'Bb5', 'x': 61, 'duration': 2 }, { 'pitch': 'A5', 'x': 49, 'duration': 2 }, { 'pitch': 'A5', 'x': 53, 'duration': 2 }, { 'pitch': 'C5', 'x': 137, 'duration': 1 }, { 'pitch': 'C5', 'x': 138, 'duration': 1 }, { 'pitch': 'C5', 'x': 169, 'duration': 1 }, { 'pitch': 'C5', 'x': 170, 'duration': 1 }, { 'pitch': 'C5', 'x': 173, 'duration': 1 }, { 'pitch': 'C5', 'x': 174, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 57, 'duration': 6 }, { 'pitch': 'Bb4', 'x': 63, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 65, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 71, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 73, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 79, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 81, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 87, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 89, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 91, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 93, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 95, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 97, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 103, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 105, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 111, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 113, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 114, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 121, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 122, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 129, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 130, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 133, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 134, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 139, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 140, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 143, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 144, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 145, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 146, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 153, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 154, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 161, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 162, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 165, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 166, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 177, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 183, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 185, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 191, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 193, 'duration': 1 }, { 'pitch': 'A4', 'x': 49, 'duration': 8 }, { 'pitch': 'A4', 'x': 64, 'duration': 1 }, { 'pitch': 'A4', 'x': 72, 'duration': 1 }, { 'pitch': 'A4', 'x': 80, 'duration': 1 }, { 'pitch': 'A4', 'x': 88, 'duration': 1 }, { 'pitch': 'A4', 'x': 90, 'duration': 1 }, { 'pitch': 'A4', 'x': 92, 'duration': 1 }, { 'pitch': 'A4', 'x': 94, 'duration': 1 }, { 'pitch': 'A4', 'x': 96, 'duration': 1 }, { 'pitch': 'A4', 'x': 98, 'duration': 2 }, { 'pitch': 'A4', 'x': 104, 'duration': 1 }, { 'pitch': 'A4', 'x': 106, 'duration': 2 }, { 'pitch': 'A4', 'x': 112, 'duration': 1 }, { 'pitch': 'A4', 'x': 115, 'duration': 1 }, { 'pitch': 'A4', 'x': 116, 'duration': 1 }, { 'pitch': 'A4', 'x': 123, 'duration': 1 }, { 'pitch': 'A4', 'x': 124, 'duration': 1 }, { 'pitch': 'A4', 'x': 131, 'duration': 1 }, { 'pitch': 'A4', 'x': 132, 'duration': 1 }, { 'pitch': 'A4', 'x': 135, 'duration': 1 }, { 'pitch': 'A4', 'x': 136, 'duration': 1 }, { 'pitch': 'A4', 'x': 141, 'duration': 1 }, { 'pitch': 'A4', 'x': 142, 'duration': 1 }, { 'pitch': 'A4', 'x': 147, 'duration': 1 }, { 'pitch': 'A4', 'x': 148, 'duration': 1 }, { 'pitch': 'A4', 'x': 155, 'duration': 1 }, { 'pitch': 'A4', 'x': 156, 'duration': 1 }, { 'pitch': 'A4', 'x': 163, 'duration': 1 }, { 'pitch': 'A4', 'x': 164, 'duration': 1 }, { 'pitch': 'A4', 'x': 167, 'duration': 1 }, { 'pitch': 'A4', 'x': 168, 'duration': 1 }, { 'pitch': 'A4', 'x': 171, 'duration': 1 }, { 'pitch': 'A4', 'x': 172, 'duration': 1 }, { 'pitch': 'A4', 'x': 175, 'duration': 1 }, { 'pitch': 'A4', 'x': 176, 'duration': 1 }, { 'pitch': 'A4', 'x': 184, 'duration': 1 }, { 'pitch': 'A4', 'x': 192, 'duration': 1 }, { 'pitch': 'G4', 'x': 33, 'duration': 8 }, { 'pitch': 'G4', 'x': 41, 'duration': 8 }, { 'pitch': 'G4', 'x': 66, 'duration': 2 }, { 'pitch': 'G4', 'x': 74, 'duration': 2 }, { 'pitch': 'G4', 'x': 82, 'duration': 2 }, { 'pitch': 'G4', 'x': 117, 'duration': 1 }, { 'pitch': 'G4', 'x': 118, 'duration': 1 }, { 'pitch': 'G4', 'x': 125, 'duration': 1 }, { 'pitch': 'G4', 'x': 126, 'duration': 1 }, { 'pitch': 'G4', 'x': 149, 'duration': 1 }, { 'pitch': 'G4', 'x': 150, 'duration': 1 }, { 'pitch': 'G4', 'x': 157, 'duration': 1 }, { 'pitch': 'G4', 'x': 158, 'duration': 1 }, { 'pitch': 'G4', 'x': 179, 'duration': 1 }, { 'pitch': 'G4', 'x': 187, 'duration': 1 }, { 'pitch': 'G4', 'x': 197, 'duration': 4 }, { 'pitch': 'D4', 'x': 65, 'duration': 4 }, { 'pitch': 'D4', 'x': 119, 'duration': 1 }, { 'pitch': 'D4', 'x': 120, 'duration': 1 }, { 'pitch': 'D4', 'x': 127, 'duration': 1 }, { 'pitch': 'D4', 'x': 128, 'duration': 1 }, { 'pitch': 'D4', 'x': 151, 'duration': 1 }, { 'pitch': 'D4', 'x': 152, 'duration': 1 }, { 'pitch': 'D4', 'x': 159, 'duration': 1 }, { 'pitch': 'D4', 'x': 160, 'duration': 1 }, { 'pitch': 'C4', 'x': 25, 'duration': 2 }, { 'pitch': 'C4', 'x': 57, 'duration': 2 }, { 'pitch': 'C4', 'x': 89, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 1, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 9, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 17, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 27, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 31, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 33, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 41, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 49, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 59, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 63, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 65, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 72, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 77, 'duration': 1 }, { 'pitch': 'Bb3', 'x': 81, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 91, 'duration': 2 }, { 'pitch': 'Bb3', 'x': 95, 'duration': 2 }, { 'pitch': 'A3', 'x': 3, 'duration': 2 }, { 'pitch': 'A3', 'x': 11, 'duration': 2 }, { 'pitch': 'A3', 'x': 19, 'duration': 2 }, { 'pitch': 'A3', 'x': 29, 'duration': 2 }, { 'pitch': 'A3', 'x': 35, 'duration': 2 }, { 'pitch': 'A3', 'x': 43, 'duration': 2 }, { 'pitch': 'A3', 'x': 51, 'duration': 2 }, { 'pitch': 'A3', 'x': 61, 'duration': 2 }, { 'pitch': 'A3', 'x': 67, 'duration': 2 }, { 'pitch': 'A3', 'x': 74, 'duration': 2 }, { 'pitch': 'A3', 'x': 83, 'duration': 2 }, { 'pitch': 'A3', 'x': 93, 'duration': 2 }, { 'pitch': 'G3', 'x': 5, 'duration': 2 }, { 'pitch': 'G3', 'x': 13, 'duration': 2 }, { 'pitch': 'G3', 'x': 21, 'duration': 2 }, { 'pitch': 'G3', 'x': 37, 'duration': 2 }, { 'pitch': 'G3', 'x': 45, 'duration': 2 }, { 'pitch': 'G3', 'x': 53, 'duration': 2 }, { 'pitch': 'G3', 'x': 69, 'duration': 2 }, { 'pitch': 'G3', 'x': 76, 'duration': 2 }, { 'pitch': 'G3', 'x': 85, 'duration': 2 }, { 'pitch': 'D3', 'x': 4, 'duration': 1 }, { 'pitch': 'D3', 'x': 7, 'duration': 2 }, { 'pitch': 'D3', 'x': 12, 'duration': 1 }, { 'pitch': 'D3', 'x': 15, 'duration': 2 }, { 'pitch': 'D3', 'x': 21, 'duration': 1 }, { 'pitch': 'D3', 'x': 23, 'duration': 2 }, { 'pitch': 'D3', 'x': 28, 'duration': 1 }, { 'pitch': 'D3', 'x': 30, 'duration': 1 }, { 'pitch': 'D3', 'x': 39, 'duration': 2 }, { 'pitch': 'D3', 'x': 47, 'duration': 2 }, { 'pitch': 'D3', 'x': 55, 'duration': 2 }, { 'pitch': 'D3', 'x': 68, 'duration': 1 }, { 'pitch': 'D3', 'x': 70, 'duration': 1 }, { 'pitch': 'D3', 'x': 71, 'duration': 2 }, { 'pitch': 'D3', 'x': 76, 'duration': 1 }, { 'pitch': 'D3', 'x': 78, 'duration': 1 }, { 'pitch': 'D3', 'x': 79, 'duration': 2 }, { 'pitch': 'D3', 'x': 87, 'duration': 2 }, { 'pitch': 'Bb2', 'x': 3, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 5, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 11, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 13, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 20, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 22, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 27, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 31, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 57, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 58, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 59, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 60, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 61, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 62, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 63, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 64, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 67, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 71, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 75, 'duration': 1 }, { 'pitch': 'Bb2', 'x': 79, 'duration': 1 }, { 'pitch': 'G2', 'x': 1, 'duration': 1 }, { 'pitch': 'G2', 'x': 2, 'duration': 1 }, { 'pitch': 'G2', 'x': 3, 'duration': 3 }, { 'pitch': 'G2', 'x': 6, 'duration': 1 }, { 'pitch': 'G2', 'x': 7, 'duration': 3 }, { 'pitch': 'G2', 'x': 10, 'duration': 1 }, { 'pitch': 'G2', 'x': 11, 'duration': 3 }, { 'pitch': 'G2', 'x': 14, 'duration': 1 }, { 'pitch': 'G2', 'x': 19, 'duration': 1 }, { 'pitch': 'G2', 'x': 23, 'duration': 1 }, { 'pitch': 'G2', 'x': 26, 'duration': 1 }, { 'pitch': 'G2', 'x': 30, 'duration': 1 }, { 'pitch': 'G2', 'x': 32, 'duration': 1 }, { 'pitch': 'G2', 'x': 33, 'duration': 1 }, { 'pitch': 'G2', 'x': 66, 'duration': 1 }, { 'pitch': 'G2', 'x': 69, 'duration': 1 }, { 'pitch': 'G2', 'x': 72, 'duration': 1 }, { 'pitch': 'G2', 'x': 74, 'duration': 1 }, { 'pitch': 'G2', 'x': 80, 'duration': 1 }, { 'pitch': 'D#2', 'x': 17, 'duration': 4 }, { 'pitch': 'D#2', 'x': 21, 'duration': 4 }, { 'pitch': 'D#2', 'x': 49, 'duration': 1 }, { 'pitch': 'D#2', 'x': 50, 'duration': 1 }, { 'pitch': 'D#2', 'x': 51, 'duration': 1 }, { 'pitch': 'D#2', 'x': 52, 'duration': 1 }, { 'pitch': 'D#2', 'x': 53, 'duration': 1 }, { 'pitch': 'D#2', 'x': 54, 'duration': 1 }, { 'pitch': 'D#2', 'x': 55, 'duration': 1 }, { 'pitch': 'D#2', 'x': 56, 'duration': 1 }, { 'pitch': 'D2', 'x': 1, 'duration': 1 }, { 'pitch': 'D2', 'x': 7, 'duration': 1 }, { 'pitch': 'D2', 'x': 8, 'duration': 1 }, { 'pitch': 'D2', 'x': 9, 'duration': 1 }, { 'pitch': 'D2', 'x': 15, 'duration': 1 }, { 'pitch': 'D2', 'x': 16, 'duration': 1 }, { 'pitch': 'D2', 'x': 18, 'duration': 1 }, { 'pitch': 'D2', 'x': 24, 'duration': 1 }, { 'pitch': 'D2', 'x': 25, 'duration': 1 }, { 'pitch': 'D2', 'x': 26, 'duration': 5 }, { 'pitch': 'D2', 'x': 31, 'duration': 1 }, { 'pitch': 'D2', 'x': 32, 'duration': 1 }, { 'pitch': 'D2', 'x': 57, 'duration': 1 }, { 'pitch': 'D2', 'x': 58, 'duration': 1 }, { 'pitch': 'D2', 'x': 59, 'duration': 1 }, { 'pitch': 'D2', 'x': 60, 'duration': 1 }, { 'pitch': 'D2', 'x': 61, 'duration': 1 }, { 'pitch': 'D2', 'x': 62, 'duration': 1 }, { 'pitch': 'D2', 'x': 63, 'duration': 1 }, { 'pitch': 'D2', 'x': 64, 'duration': 1 }, { 'pitch': 'D2', 'x': 65, 'duration': 3 }, { 'pitch': 'D2', 'x': 68, 'duration': 1 }, { 'pitch': 'D2', 'x': 69, 'duration': 1 }, { 'pitch': 'D2', 'x': 70, 'duration': 1 }, { 'pitch': 'D2', 'x': 71, 'duration': 1 }, { 'pitch': 'D2', 'x': 72, 'duration': 1 }, { 'pitch': 'D2', 'x': 73, 'duration': 1 }, { 'pitch': 'D2', 'x': 74, 'duration': 6 }, { 'pitch': 'D2', 'x': 80, 'duration': 1 }, { 'pitch': 'D2', 'x': 82, 'duration': 1 }, { 'pitch': 'Bb1', 'x': 17, 'duration': 1 }, { 'pitch': 'Bb1', 'x': 67, 'duration': 1 }, { 'pitch': 'Bb1', 'x': 71, 'duration': 1 }, { 'pitch': 'Bb1', 'x': 81, 'duration': 1 }, { 'pitch': 'G1', 'x': 33, 'duration': 1 }, { 'pitch': 'G1', 'x': 34, 'duration': 1 }, { 'pitch': 'G1', 'x': 35, 'duration': 1 }, { 'pitch': 'G1', 'x': 36, 'duration': 1 }, { 'pitch': 'G1', 'x': 37, 'duration': 1 }, { 'pitch': 'G1', 'x': 38, 'duration': 1 }, { 'pitch': 'G1', 'x': 39, 'duration': 1 }, { 'pitch': 'G1', 'x': 40, 'duration': 1 }, { 'pitch': 'G1', 'x': 41, 'duration': 1 }, { 'pitch': 'G1', 'x': 42, 'duration': 1 }, { 'pitch': 'G1', 'x': 43, 'duration': 1 }, { 'pitch': 'G1', 'x': 44, 'duration': 1 }, { 'pitch': 'G1', 'x': 45, 'duration': 1 }, { 'pitch': 'G1', 'x': 46, 'duration': 1 }, { 'pitch': 'G1', 'x': 47, 'duration': 1 }, { 'pitch': 'G1', 'x': 48, 'duration': 1 }, { 'pitch': 'G1', 'x': 64, 'duration': 1 }, { 'pitch': 'G1', 'x': 65, 'duration': 1 }, { 'pitch': 'G1', 'x': 66, 'duration': 1 }, { 'pitch': 'G1', 'x': 67, 'duration': 1 }, { 'pitch': 'G1', 'x': 68, 'duration': 1 }, { 'pitch': 'G1', 'x': 69, 'duration': 1 }, { 'pitch': 'G1', 'x': 70, 'duration': 1 }, { 'pitch': 'G1', 'x': 71, 'duration': 1 }, { 'pitch': 'G1', 'x': 72, 'duration': 1 }, { 'pitch': 'G1', 'x': 73, 'duration': 1 }, { 'pitch': 'G1', 'x': 74, 'duration': 1 }, { 'pitch': 'G1', 'x': 75, 'duration': 1 }, { 'pitch': 'G1', 'x': 76, 'duration': 1 }, { 'pitch': 'G1', 'x': 77, 'duration': 1 }, { 'pitch': 'G1', 'x': 78, 'duration': 1 }, { 'pitch': 'G1', 'x': 79, 'duration': 1 }, { 'pitch': 'D#1', 'x': 49, 'duration': 1 }, { 'pitch': 'D#1', 'x': 50, 'duration': 1 }, { 'pitch': 'D#1', 'x': 51, 'duration': 1 }, { 'pitch': 'D#1', 'x': 52, 'duration': 1 }, { 'pitch': 'D#1', 'x': 53, 'duration': 1 }, { 'pitch': 'D#1', 'x': 54, 'duration': 1 }, { 'pitch': 'D#1', 'x': 55, 'duration': 1 }, { 'pitch': 'D#1', 'x': 56, 'duration': 1 }, { 'pitch': 'D#1', 'x': 80, 'duration': 1 }, { 'pitch': 'D#1', 'x': 81, 'duration': 1 }, { 'pitch': 'D#1', 'x': 82, 'duration': 1 }, { 'pitch': 'D#1', 'x': 83, 'duration': 1 }, { 'pitch': 'D#1', 'x': 84, 'duration': 1 }, { 'pitch': 'D#1', 'x': 85, 'duration': 1 }, { 'pitch': 'D#1', 'x': 86, 'duration': 1 }, { 'pitch': 'D#1', 'x': 87, 'duration': 1 }, { 'pitch': 'D1', 'x': 57, 'duration': 1 }, { 'pitch': 'D1', 'x': 58, 'duration': 1 }, { 'pitch': 'D1', 'x': 59, 'duration': 1 }, { 'pitch': 'D1', 'x': 60, 'duration': 1 }, { 'pitch': 'D1', 'x': 61, 'duration': 1 }, { 'pitch': 'D1', 'x': 62, 'duration': 1 }, { 'pitch': 'D1', 'x': 63, 'duration': 1 }, { 'pitch': 'D1', 'x': 64, 'duration': 1 }, { 'pitch': 'D1', 'x': 88, 'duration': 1 }, { 'pitch': 'D1', 'x': 89, 'duration': 1 }, { 'pitch': 'D1', 'x': 90, 'duration': 1 }, { 'pitch': 'D1', 'x': 91, 'duration': 1 }, { 'pitch': 'D1', 'x': 92, 'duration': 1 }, { 'pitch': 'D1', 'x': 93, 'duration': 1 }, { 'pitch': 'D1', 'x': 94, 'duration': 1 }, { 'pitch': 'D1', 'x': 95, 'duration': 1 }]
        },
        'Mario': {
            id: 'Mario',
            title: 'Theme from Super Mario',
            bpm: 120,
            instrumentId: 'Synth Lead',
            notes: [{ 'pitch': 'G5', 'x': 9, 'duration': 1 }, { 'pitch': 'E5', 'x': 1, 'duration': 1 }, { 'pitch': 'E5', 'x': 2, 'duration': 1 }, { 'pitch': 'E5', 'x': 4, 'duration': 1 }, { 'pitch': 'E5', 'x': 7, 'duration': 1 }, { 'pitch': 'C5', 'x': 6, 'duration': 1 }, { 'pitch': 'C5', 'x': 17, 'duration': 1 }, { 'pitch': 'B4', 'x': 9, 'duration': 1 }, { 'pitch': 'B4', 'x': 28, 'duration': 1 }, { 'pitch': 'Bb4', 'x': 30, 'duration': 1 }, { 'pitch': 'A4', 'x': 26, 'duration': 1 }, { 'pitch': 'A4', 'x': 31, 'duration': 1 }, { 'pitch': 'G4', 'x': 9, 'duration': 1 }, { 'pitch': 'G4', 'x': 13, 'duration': 1 }, { 'pitch': 'G4', 'x': 20, 'duration': 1 }, { 'pitch': 'G4', 'x': 33, 'duration': 2 }, { 'pitch': 'F#4', 'x': 1, 'duration': 1 }, { 'pitch': 'F#4', 'x': 2, 'duration': 1 }, { 'pitch': 'F#4', 'x': 4, 'duration': 1 }, { 'pitch': 'F#4', 'x': 6, 'duration': 1 }, { 'pitch': 'F#4', 'x': 7, 'duration': 1 }, { 'pitch': 'E4', 'x': 17, 'duration': 1 }, { 'pitch': 'E4', 'x': 23, 'duration': 1 }, { 'pitch': 'D4', 'x': 28, 'duration': 1 }, { 'pitch': 'C#4', 'x': 30, 'duration': 1 }, { 'pitch': 'C4', 'x': 20, 'duration': 1 }, { 'pitch': 'C4', 'x': 26, 'duration': 1 }, { 'pitch': 'C4', 'x': 31, 'duration': 1 }, { 'pitch': 'C4', 'x': 33, 'duration': 2 }, { 'pitch': 'G3', 'x': 13, 'duration': 1 }, { 'pitch': 'G3', 'x': 17, 'duration': 1 }, { 'pitch': 'G3', 'x': 23, 'duration': 1 }, { 'pitch': 'G3', 'x': 28, 'duration': 1 }, { 'pitch': 'F#3', 'x': 30, 'duration': 1 }, { 'pitch': 'F3', 'x': 26, 'duration': 1 }, { 'pitch': 'F3', 'x': 31, 'duration': 1 }, { 'pitch': 'E3', 'x': 20, 'duration': 1 }, { 'pitch': 'E3', 'x': 33, 'duration': 2 }, { 'pitch': 'D3', 'x': 1, 'duration': 1 }, { 'pitch': 'D3', 'x': 2, 'duration': 1 }, { 'pitch': 'D3', 'x': 4, 'duration': 1 }, { 'pitch': 'D3', 'x': 6, 'duration': 1 }, { 'pitch': 'D3', 'x': 7, 'duration': 1 }, { 'pitch': 'C#3', 'x': 23, 'duration': 1 }]
        },
        'Twinkle': {
            id: 'Twinkle',
            title: 'Twinkle Twinkle Little Star',
            bpm: 80,
            instrumentId: 'Piano',
            notes: [{ 'pitch': 'A4', 'x': 5, 'duration': 1 }, { 'pitch': 'A4', 'x': 6, 'duration': 1 }, { 'pitch': 'A4', 'x': 37, 'duration': 1 }, { 'pitch': 'A4', 'x': 38, 'duration': 1 }, { 'pitch': 'G4', 'x': 3, 'duration': 1 }, { 'pitch': 'G4', 'x': 4, 'duration': 1 }, { 'pitch': 'G4', 'x': 7, 'duration': 2 }, { 'pitch': 'G4', 'x': 17, 'duration': 1 }, { 'pitch': 'G4', 'x': 18, 'duration': 1 }, { 'pitch': 'G4', 'x': 25, 'duration': 1 }, { 'pitch': 'G4', 'x': 26, 'duration': 1 }, { 'pitch': 'G4', 'x': 35, 'duration': 1 }, { 'pitch': 'G4', 'x': 36, 'duration': 1 }, { 'pitch': 'G4', 'x': 39, 'duration': 2 }, { 'pitch': 'F4', 'x': 9, 'duration': 1 }, { 'pitch': 'F4', 'x': 10, 'duration': 1 }, { 'pitch': 'F4', 'x': 19, 'duration': 1 }, { 'pitch': 'F4', 'x': 20, 'duration': 1 }, { 'pitch': 'F4', 'x': 27, 'duration': 1 }, { 'pitch': 'F4', 'x': 28, 'duration': 1 }, { 'pitch': 'F4', 'x': 41, 'duration': 1 }, { 'pitch': 'F4', 'x': 42, 'duration': 1 }, { 'pitch': 'E4', 'x': 11, 'duration': 1 }, { 'pitch': 'E4', 'x': 12, 'duration': 1 }, { 'pitch': 'E4', 'x': 21, 'duration': 1 }, { 'pitch': 'E4', 'x': 22, 'duration': 1 }, { 'pitch': 'E4', 'x': 29, 'duration': 1 }, { 'pitch': 'E4', 'x': 30, 'duration': 1 }, { 'pitch': 'E4', 'x': 43, 'duration': 1 }, { 'pitch': 'E4', 'x': 44, 'duration': 1 }, { 'pitch': 'D4', 'x': 13, 'duration': 1 }, { 'pitch': 'D4', 'x': 14, 'duration': 1 }, { 'pitch': 'D4', 'x': 23, 'duration': 2 }, { 'pitch': 'D4', 'x': 31, 'duration': 2 }, { 'pitch': 'D4', 'x': 45, 'duration': 1 }, { 'pitch': 'D4', 'x': 46, 'duration': 1 }, { 'pitch': 'C4', 'x': 1, 'duration': 1 }, { 'pitch': 'C4', 'x': 2, 'duration': 1 }, { 'pitch': 'C4', 'x': 15, 'duration': 2 }, { 'pitch': 'C4', 'x': 33, 'duration': 1 }, { 'pitch': 'C4', 'x': 34, 'duration': 1 }, { 'pitch': 'C4', 'x': 47, 'duration': 2 }]
        }
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
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "Editor" },
                React.createElement("canvas", { id: "canvas", ref: canvasRef })));
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

    var songs = [defaults$1['Mario'], defaults$1['Lux Aeterna'], defaults$1['Twinkle'], defaults$1['New Song']];
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
