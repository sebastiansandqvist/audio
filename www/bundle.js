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

    // function fixOffset(notes: Note[]): Note[] {
    //   const offset = notes[0].x || 0;
    //   return notes.map((note) => ({
    //     pitch: note.pitch,
    //     x: note.x - offset,
    //     duration: note.duration
    //   }));
    // }
    var defaults$1 = {
        'New Song': {
            id: 'New Song',
            title: '',
            bpm: 120,
            instrumentId: 'Piano',
            notes: []
        },
        'Carol': {
            id: 'Carol',
            title: 'Carol of the Bells',
            bpm: 90,
            instrumentId: 'Piano',
            notes: [{ "pitch": "Bb4", "x": 0, "duration": 2 }, { "pitch": "A4", "x": 2, "duration": 1 }, { "pitch": "Bb4", "x": 3, "duration": 1 }, { "pitch": "G4", "x": 4, "duration": 2 }, { "pitch": "Bb4", "x": 6, "duration": 2 }, { "pitch": "F4", "x": 6, "duration": 6 }, { "pitch": "A4", "x": 8, "duration": 1 }, { "pitch": "Bb4", "x": 9, "duration": 1 }, { "pitch": "G4", "x": 10, "duration": 2 }, { "pitch": "Bb4", "x": 12, "duration": 2 }, { "pitch": "D#4", "x": 12, "duration": 6 }, { "pitch": "A4", "x": 14, "duration": 1 }, { "pitch": "Bb4", "x": 15, "duration": 1 }, { "pitch": "G4", "x": 16, "duration": 2 }, { "pitch": "Bb4", "x": 18, "duration": 2 }, { "pitch": "D4", "x": 18, "duration": 6 }, { "pitch": "A4", "x": 20, "duration": 1 }, { "pitch": "Bb4", "x": 21, "duration": 1 }, { "pitch": "G4", "x": 22, "duration": 2 }, { "pitch": "Bb4", "x": 24, "duration": 2 }, { "pitch": "D#4", "x": 24, "duration": 6 }, { "pitch": "A4", "x": 26, "duration": 1 }, { "pitch": "Bb4", "x": 27, "duration": 1 }, { "pitch": "G4", "x": 28, "duration": 2 }, { "pitch": "Bb4", "x": 30, "duration": 2 }, { "pitch": "D4", "x": 30, "duration": 6 }, { "pitch": "F4", "x": 30, "duration": 6 }, { "pitch": "A4", "x": 32, "duration": 1 }, { "pitch": "Bb4", "x": 33, "duration": 1 }, { "pitch": "G4", "x": 34, "duration": 2 }, { "pitch": "Bb4", "x": 36, "duration": 2 }, { "pitch": "C4", "x": 36, "duration": 6 }, { "pitch": "D#4", "x": 36, "duration": 6 }, { "pitch": "A4", "x": 38, "duration": 1 }, { "pitch": "Bb4", "x": 39, "duration": 1 }, { "pitch": "G4", "x": 40, "duration": 2 }, { "pitch": "Bb4", "x": 42, "duration": 2 }, { "pitch": "G3", "x": 42, "duration": 6 }, { "pitch": "D4", "x": 42, "duration": 6 }, { "pitch": "A4", "x": 44, "duration": 1 }, { "pitch": "Bb4", "x": 45, "duration": 1 }, { "pitch": "G4", "x": 46, "duration": 2 }, { "pitch": "G4", "x": 48, "duration": 2 }, { "pitch": "Bb4", "x": 48, "duration": 2 }, { "pitch": "D#3", "x": 48, "duration": 6 }, { "pitch": "C4", "x": 48, "duration": 6 }, { "pitch": "A4", "x": 50, "duration": 1 }, { "pitch": "Bb4", "x": 51, "duration": 1 }, { "pitch": "G4", "x": 52, "duration": 2 }, { "pitch": "G4", "x": 54, "duration": 2 }, { "pitch": "Bb4", "x": 54, "duration": 2 }, { "pitch": "G3", "x": 54, "duration": 6 }, { "pitch": "D4", "x": 54, "duration": 6 }, { "pitch": "A4", "x": 56, "duration": 1 }, { "pitch": "Bb4", "x": 57, "duration": 1 }, { "pitch": "G4", "x": 58, "duration": 2 }, { "pitch": "G4", "x": 60, "duration": 2 }, { "pitch": "Bb4", "x": 60, "duration": 2 }, { "pitch": "D#3", "x": 60, "duration": 6 }, { "pitch": "C4", "x": 60, "duration": 6 }, { "pitch": "A4", "x": 62, "duration": 1 }, { "pitch": "Bb4", "x": 63, "duration": 1 }, { "pitch": "G4", "x": 64, "duration": 2 }, { "pitch": "G4", "x": 66, "duration": 2 }, { "pitch": "Bb4", "x": 66, "duration": 2 }, { "pitch": "G3", "x": 66, "duration": 6 }, { "pitch": "D4", "x": 66, "duration": 6 }, { "pitch": "A4", "x": 68, "duration": 1 }, { "pitch": "Bb4", "x": 69, "duration": 1 }, { "pitch": "G4", "x": 70, "duration": 2 }, { "pitch": "Bb4", "x": 72, "duration": 2 }, { "pitch": "D5", "x": 72, "duration": 2 }, { "pitch": "G3", "x": 72, "duration": 6 }, { "pitch": "D4", "x": 72, "duration": 6 }, { "pitch": "C5", "x": 74, "duration": 1 }, { "pitch": "D5", "x": 75, "duration": 1 }, { "pitch": "G4", "x": 76, "duration": 2 }, { "pitch": "Bb4", "x": 76, "duration": 2 }, { "pitch": "Bb4", "x": 78, "duration": 2 }, { "pitch": "D5", "x": 78, "duration": 2 }, { "pitch": "G3", "x": 78, "duration": 6 }, { "pitch": "E4", "x": 78, "duration": 6 }, { "pitch": "C5", "x": 80, "duration": 1 }, { "pitch": "D5", "x": 81, "duration": 1 }, { "pitch": "G4", "x": 82, "duration": 2 }, { "pitch": "Bb4", "x": 82, "duration": 2 }, { "pitch": "Bb4", "x": 84, "duration": 2 }, { "pitch": "D5", "x": 84, "duration": 2 }, { "pitch": "G3", "x": 84, "duration": 6 }, { "pitch": "F4", "x": 84, "duration": 6 }, { "pitch": "C5", "x": 86, "duration": 1 }, { "pitch": "D5", "x": 87, "duration": 1 }, { "pitch": "G4", "x": 88, "duration": 2 }, { "pitch": "Bb4", "x": 88, "duration": 2 }, { "pitch": "Bb4", "x": 90, "duration": 2 }, { "pitch": "D5", "x": 90, "duration": 2 }, { "pitch": "G3", "x": 90, "duration": 2 }, { "pitch": "E4", "x": 90, "duration": 2 }, { "pitch": "C5", "x": 92, "duration": 1 }, { "pitch": "G3", "x": 92, "duration": 2 }, { "pitch": "D#4", "x": 92, "duration": 2 }, { "pitch": "D5", "x": 93, "duration": 1 }, { "pitch": "G4", "x": 94, "duration": 2 }, { "pitch": "Bb4", "x": 94, "duration": 2 }, { "pitch": "G3", "x": 94, "duration": 2 }, { "pitch": "D4", "x": 94, "duration": 2 }, { "pitch": "G4", "x": 96, "duration": 2 }, { "pitch": "Bb4", "x": 96, "duration": 2 }, { "pitch": "D5", "x": 96, "duration": 2 }, { "pitch": "G5", "x": 96, "duration": 2 }, { "pitch": "Bb3", "x": 96, "duration": 6 }, { "pitch": "D4", "x": 96, "duration": 6 }, { "pitch": "G4", "x": 98, "duration": 1 }, { "pitch": "G5", "x": 98, "duration": 1 }, { "pitch": "G4", "x": 99, "duration": 1 }, { "pitch": "G5", "x": 99, "duration": 1 }, { "pitch": "F4", "x": 100, "duration": 1 }, { "pitch": "F5", "x": 100, "duration": 1 }, { "pitch": "D#4", "x": 101, "duration": 1 }, { "pitch": "D#5", "x": 101, "duration": 1 }, { "pitch": "D5", "x": 102, "duration": 2 }, { "pitch": "D4", "x": 102, "duration": 6 }, { "pitch": "G4", "x": 102, "duration": 6 }, { "pitch": "Bb3", "x": 102, "duration": 6 }, { "pitch": "D5", "x": 104, "duration": 1 }, { "pitch": "D5", "x": 105, "duration": 1 }, { "pitch": "C5", "x": 106, "duration": 1 }, { "pitch": "Bb4", "x": 107, "duration": 1 }, { "pitch": "C5", "x": 108, "duration": 2 }, { "pitch": "D#4", "x": 108, "duration": 6 }, { "pitch": "G4", "x": 108, "duration": 6 }, { "pitch": "Bb3", "x": 108, "duration": 6 }, { "pitch": "C5", "x": 110, "duration": 1 }, { "pitch": "C5", "x": 111, "duration": 1 }, { "pitch": "D5", "x": 112, "duration": 1 }, { "pitch": "C5", "x": 113, "duration": 1 }, { "pitch": "Bb4", "x": 114, "duration": 2 }, { "pitch": "D4", "x": 114, "duration": 6 }, { "pitch": "Bb3", "x": 114, "duration": 6 }, { "pitch": "A4", "x": 116, "duration": 1 }, { "pitch": "Bb4", "x": 117, "duration": 1 }, { "pitch": "G4", "x": 118, "duration": 2 }, { "pitch": "D4", "x": 120, "duration": 1 }, { "pitch": "D3", "x": 120, "duration": 6 }, { "pitch": "F#3", "x": 120, "duration": 6 }, { "pitch": "E4", "x": 121, "duration": 1 }, { "pitch": "F#4", "x": 122, "duration": 1 }, { "pitch": "G4", "x": 123, "duration": 1 }, { "pitch": "A4", "x": 124, "duration": 1 }, { "pitch": "Bb4", "x": 125, "duration": 1 }, { "pitch": "C5", "x": 126, "duration": 1 }, { "pitch": "E4", "x": 126, "duration": 2 }, { "pitch": "D3", "x": 126, "duration": 4 }, { "pitch": "A3", "x": 126, "duration": 4 }, { "pitch": "D5", "x": 127, "duration": 1 }, { "pitch": "C5", "x": 128, "duration": 2 }, { "pitch": "F#4", "x": 128, "duration": 2 }, { "pitch": "Bb4", "x": 130, "duration": 2 }, { "pitch": "G4", "x": 130, "duration": 2 }, { "pitch": "D3", "x": 130, "duration": 2 }, { "pitch": "G3", "x": 130, "duration": 2 }, { "pitch": "D4", "x": 132, "duration": 1 }, { "pitch": "D3", "x": 132, "duration": 6 }, { "pitch": "F#3", "x": 132, "duration": 6 }, { "pitch": "E4", "x": 133, "duration": 1 }, { "pitch": "F#4", "x": 134, "duration": 1 }, { "pitch": "G4", "x": 135, "duration": 1 }, { "pitch": "A4", "x": 136, "duration": 1 }, { "pitch": "Bb4", "x": 137, "duration": 1 }, { "pitch": "C5", "x": 138, "duration": 1 }, { "pitch": "E4", "x": 138, "duration": 2 }, { "pitch": "D3", "x": 138, "duration": 4 }, { "pitch": "A3", "x": 138, "duration": 4 }, { "pitch": "D5", "x": 139, "duration": 1 }, { "pitch": "C5", "x": 140, "duration": 2 }, { "pitch": "F#4", "x": 140, "duration": 2 }, { "pitch": "Bb4", "x": 142, "duration": 2 }, { "pitch": "G4", "x": 142, "duration": 2 }, { "pitch": "D3", "x": 142, "duration": 2 }, { "pitch": "G3", "x": 142, "duration": 2 }, { "pitch": "Bb4", "x": 144, "duration": 2 }, { "pitch": "D4", "x": 144, "duration": 6 }, { "pitch": "F3", "x": 144, "duration": 6 }, { "pitch": "G3", "x": 144, "duration": 6 }, { "pitch": "A4", "x": 146, "duration": 1 }, { "pitch": "Bb4", "x": 147, "duration": 1 }, { "pitch": "G4", "x": 148, "duration": 2 }, { "pitch": "Bb4", "x": 150, "duration": 2 }, { "pitch": "C4", "x": 150, "duration": 6 }, { "pitch": "D#3", "x": 150, "duration": 6 }, { "pitch": "G3", "x": 150, "duration": 6 }, { "pitch": "A4", "x": 152, "duration": 1 }, { "pitch": "Bb4", "x": 153, "duration": 1 }, { "pitch": "G4", "x": 154, "duration": 2 }, { "pitch": "Bb4", "x": 156, "duration": 2 }, { "pitch": "F4", "x": 156, "duration": 6 }, { "pitch": "D3", "x": 156, "duration": 6 }, { "pitch": "G3", "x": 156, "duration": 6 }, { "pitch": "A4", "x": 158, "duration": 1 }, { "pitch": "Bb4", "x": 159, "duration": 1 }, { "pitch": "G4", "x": 160, "duration": 2 }, { "pitch": "Bb4", "x": 162, "duration": 2 }, { "pitch": "D#4", "x": 162, "duration": 6 }, { "pitch": "C3", "x": 162, "duration": 6 }, { "pitch": "G3", "x": 162, "duration": 6 }, { "pitch": "A4", "x": 164, "duration": 1 }, { "pitch": "Bb4", "x": 165, "duration": 1 }, { "pitch": "G4", "x": 166, "duration": 2 }, { "pitch": "Bb4", "x": 168, "duration": 2 }, { "pitch": "D4", "x": 168, "duration": 6 }, { "pitch": "G2", "x": 168, "duration": 30 }, { "pitch": "G3", "x": 168, "duration": 30 }, { "pitch": "A4", "x": 170, "duration": 1 }, { "pitch": "Bb4", "x": 171, "duration": 1 }, { "pitch": "G4", "x": 172, "duration": 2 }, { "pitch": "Bb4", "x": 174, "duration": 2 }, { "pitch": "D4", "x": 174, "duration": 6 }, { "pitch": "A4", "x": 176, "duration": 1 }, { "pitch": "Bb4", "x": 177, "duration": 1 }, { "pitch": "G4", "x": 178, "duration": 2 }, { "pitch": "Bb4", "x": 180, "duration": 2 }, { "pitch": "A4", "x": 182, "duration": 1 }, { "pitch": "Bb4", "x": 183, "duration": 1 }, { "pitch": "G4", "x": 184, "duration": 2 }, { "pitch": "Bb4", "x": 186, "duration": 2 }, { "pitch": "A4", "x": 188, "duration": 1 }, { "pitch": "Bb4", "x": 189, "duration": 1 }, { "pitch": "G4", "x": 190, "duration": 8 }]
        },
        'Pirate': {
            id: 'Pirate',
            title: 'He\'s a Pirate',
            bpm: 100,
            instrumentId: 'Piano',
            notes: [{ "pitch": "A3", "x": 0, "duration": 1 }, { "pitch": "C4", "x": 1, "duration": 1 }, { "pitch": "D4", "x": 2, "duration": 2 }, { "pitch": "D3", "x": 2, "duration": 6 }, { "pitch": "D4", "x": 4, "duration": 2 }, { "pitch": "D4", "x": 6, "duration": 1 }, { "pitch": "E4", "x": 7, "duration": 1 }, { "pitch": "F4", "x": 8, "duration": 2 }, { "pitch": "Bb2", "x": 8, "duration": 6 }, { "pitch": "F4", "x": 10, "duration": 2 }, { "pitch": "F4", "x": 12, "duration": 1 }, { "pitch": "G4", "x": 13, "duration": 1 }, { "pitch": "E4", "x": 14, "duration": 2 }, { "pitch": "A2", "x": 14, "duration": 6 }, { "pitch": "E4", "x": 16, "duration": 2 }, { "pitch": "D4", "x": 18, "duration": 1 }, { "pitch": "C4", "x": 19, "duration": 1 }, { "pitch": "C4", "x": 20, "duration": 1 }, { "pitch": "C3", "x": 20, "duration": 1 }, { "pitch": "D4", "x": 21, "duration": 2 }, { "pitch": "D3", "x": 21, "duration": 2 }, { "pitch": "A3", "x": 24, "duration": 1 }, { "pitch": "C4", "x": 25, "duration": 1 }, { "pitch": "D4", "x": 26, "duration": 2 }, { "pitch": "Bb2", "x": 26, "duration": 6 }, { "pitch": "D4", "x": 28, "duration": 2 }, { "pitch": "D4", "x": 30, "duration": 1 }, { "pitch": "E4", "x": 31, "duration": 1 }, { "pitch": "F4", "x": 32, "duration": 2 }, { "pitch": "F2", "x": 32, "duration": 6 }, { "pitch": "F4", "x": 34, "duration": 2 }, { "pitch": "F4", "x": 36, "duration": 1 }, { "pitch": "G4", "x": 37, "duration": 1 }, { "pitch": "E4", "x": 38, "duration": 2 }, { "pitch": "C3", "x": 38, "duration": 4 }, { "pitch": "E4", "x": 40, "duration": 2 }, { "pitch": "D4", "x": 42, "duration": 1 }, { "pitch": "A2", "x": 42, "duration": 2 }, { "pitch": "C4", "x": 43, "duration": 1 }, { "pitch": "D4", "x": 44, "duration": 2 }, { "pitch": "D3", "x": 44, "duration": 6 }, { "pitch": "A3", "x": 48, "duration": 1 }, { "pitch": "C4", "x": 49, "duration": 1 }, { "pitch": "D4", "x": 50, "duration": 2 }, { "pitch": "D3", "x": 50, "duration": 6 }, { "pitch": "D4", "x": 52, "duration": 2 }, { "pitch": "D4", "x": 54, "duration": 1 }, { "pitch": "F4", "x": 55, "duration": 1 }, { "pitch": "G4", "x": 56, "duration": 2 }, { "pitch": "Bb2", "x": 56, "duration": 6 }, { "pitch": "G4", "x": 58, "duration": 2 }, { "pitch": "G4", "x": 60, "duration": 1 }, { "pitch": "A4", "x": 61, "duration": 1 }, { "pitch": "Bb4", "x": 62, "duration": 2 }, { "pitch": "G2", "x": 62, "duration": 6 }, { "pitch": "Bb4", "x": 64, "duration": 2 }, { "pitch": "A4", "x": 66, "duration": 1 }, { "pitch": "G4", "x": 67, "duration": 1 }, { "pitch": "A4", "x": 68, "duration": 1 }, { "pitch": "D3", "x": 68, "duration": 6 }, { "pitch": "D4", "x": 69, "duration": 2 }, { "pitch": "D4", "x": 72, "duration": 1 }, { "pitch": "E4", "x": 73, "duration": 1 }, { "pitch": "F4", "x": 74, "duration": 2 }, { "pitch": "Bb2", "x": 74, "duration": 6 }, { "pitch": "F4", "x": 76, "duration": 2 }, { "pitch": "G4", "x": 78, "duration": 2 }, { "pitch": "A4", "x": 80, "duration": 1 }, { "pitch": "D3", "x": 80, "duration": 6 }, { "pitch": "D4", "x": 81, "duration": 2 }, { "pitch": "D4", "x": 84, "duration": 1 }, { "pitch": "F4", "x": 85, "duration": 1 }, { "pitch": "E4", "x": 86, "duration": 2 }, { "pitch": "A2", "x": 86, "duration": 6 }, { "pitch": "E4", "x": 88, "duration": 2 }, { "pitch": "F4", "x": 90, "duration": 1 }, { "pitch": "D4", "x": 91, "duration": 1 }, { "pitch": "E4", "x": 92, "duration": 2 }, { "pitch": "A2", "x": 92, "duration": 6 }]
        },
        'Lux Aeterna': {
            id: 'Lux Aeterna',
            title: 'Lux Aeterna',
            bpm: 130,
            instrumentId: 'Piano',
            notes: [{ "pitch": "G1", "x": 0, "duration": 15 }, { "pitch": "G2", "x": 0, "duration": 15 }, { "pitch": "G2", "x": 16, "duration": 16 }, { "pitch": "G3", "x": 16, "duration": 16 }, { "pitch": "D#2", "x": 32, "duration": 8 }, { "pitch": "D#3", "x": 32, "duration": 8 }, { "pitch": "D2", "x": 40, "duration": 8 }, { "pitch": "D3", "x": 40, "duration": 8 }, { "pitch": "G2", "x": 48, "duration": 16 }, { "pitch": "G3", "x": 48, "duration": 16 }, { "pitch": "D#2", "x": 64, "duration": 8 }, { "pitch": "D#3", "x": 64, "duration": 8 }, { "pitch": "D2", "x": 72, "duration": 8 }, { "pitch": "D3", "x": 72, "duration": 8 }, { "pitch": "Bb5", "x": 80, "duration": 2 }, { "pitch": "G2", "x": 80, "duration": 16 }, { "pitch": "G3", "x": 80, "duration": 16 }, { "pitch": "A5", "x": 82, "duration": 2 }, { "pitch": "G5", "x": 84, "duration": 2 }, { "pitch": "D5", "x": 86, "duration": 2 }, { "pitch": "Bb5", "x": 88, "duration": 2 }, { "pitch": "A5", "x": 90, "duration": 2 }, { "pitch": "G5", "x": 92, "duration": 2 }, { "pitch": "D5", "x": 94, "duration": 2 }, { "pitch": "Bb5", "x": 96, "duration": 2 }, { "pitch": "D#2", "x": 96, "duration": 8 }, { "pitch": "Bb2", "x": 96, "duration": 8 }, { "pitch": "D#3", "x": 96, "duration": 8 }, { "pitch": "A5", "x": 98, "duration": 2 }, { "pitch": "G5", "x": 100, "duration": 2 }, { "pitch": "D5", "x": 102, "duration": 2 }, { "pitch": "C6", "x": 104, "duration": 2 }, { "pitch": "D2", "x": 104, "duration": 8 }, { "pitch": "A2", "x": 104, "duration": 8 }, { "pitch": "D3", "x": 104, "duration": 8 }, { "pitch": "Bb5", "x": 106, "duration": 2 }, { "pitch": "A5", "x": 108, "duration": 2 }, { "pitch": "Bb5", "x": 110, "duration": 2 }, { "pitch": "Bb5", "x": 112, "duration": 2 }, { "pitch": "G2", "x": 112, "duration": 16 }, { "pitch": "G3", "x": 112, "duration": 16 }, { "pitch": "A5", "x": 114, "duration": 2 }, { "pitch": "G5", "x": 116, "duration": 2 }, { "pitch": "D5", "x": 118, "duration": 2 }, { "pitch": "Bb5", "x": 120, "duration": 2 }, { "pitch": "A5", "x": 122, "duration": 2 }, { "pitch": "G5", "x": 124, "duration": 2 }, { "pitch": "D5", "x": 126, "duration": 2 }, { "pitch": "Bb5", "x": 128, "duration": 2 }, { "pitch": "D#2", "x": 128, "duration": 8 }, { "pitch": "Bb2", "x": 128, "duration": 8 }, { "pitch": "D#3", "x": 128, "duration": 8 }, { "pitch": "A5", "x": 130, "duration": 2 }, { "pitch": "G5", "x": 132, "duration": 2 }, { "pitch": "D5", "x": 134, "duration": 2 }, { "pitch": "C6", "x": 136, "duration": 2 }, { "pitch": "D2", "x": 136, "duration": 8 }, { "pitch": "A2", "x": 136, "duration": 8 }, { "pitch": "D3", "x": 136, "duration": 8 }, { "pitch": "Bb5", "x": 138, "duration": 2 }, { "pitch": "A5", "x": 140, "duration": 2 }, { "pitch": "G5", "x": 142, "duration": 2 }, { "pitch": "Bb5", "x": 144, "duration": 2 }, { "pitch": "G2", "x": 144, "duration": 16 }, { "pitch": "G3", "x": 144, "duration": 16 }, { "pitch": "A5", "x": 146, "duration": 2 }, { "pitch": "G5", "x": 148, "duration": 2 }, { "pitch": "D5", "x": 150, "duration": 2 }, { "pitch": "Bb5", "x": 152, "duration": 2 }, { "pitch": "A5", "x": 154, "duration": 2 }, { "pitch": "G5", "x": 156, "duration": 2 }, { "pitch": "D5", "x": 158, "duration": 2 }, { "pitch": "Bb5", "x": 160, "duration": 2 }, { "pitch": "D#2", "x": 160, "duration": 8 }, { "pitch": "Bb2", "x": 160, "duration": 8 }, { "pitch": "D#3", "x": 160, "duration": 8 }, { "pitch": "A5", "x": 162, "duration": 2 }, { "pitch": "G5", "x": 164, "duration": 2 }, { "pitch": "D5", "x": 166, "duration": 2 }, { "pitch": "C6", "x": 168, "duration": 2 }, { "pitch": "D2", "x": 168, "duration": 8 }, { "pitch": "A2", "x": 168, "duration": 8 }, { "pitch": "D3", "x": 168, "duration": 8 }, { "pitch": "Bb5", "x": 170, "duration": 2 }, { "pitch": "A5", "x": 172, "duration": 2 }, { "pitch": "Bb5", "x": 174, "duration": 2 }, { "pitch": "Bb5", "x": 176, "duration": 2 }, { "pitch": "G2", "x": 176, "duration": 16 }, { "pitch": "G3", "x": 176, "duration": 16 }, { "pitch": "A5", "x": 178, "duration": 2 }, { "pitch": "G5", "x": 180, "duration": 2 }, { "pitch": "D5", "x": 182, "duration": 2 }, { "pitch": "Bb5", "x": 184, "duration": 2 }, { "pitch": "A5", "x": 186, "duration": 2 }, { "pitch": "G5", "x": 188, "duration": 2 }, { "pitch": "D5", "x": 190, "duration": 2 }, { "pitch": "Bb5", "x": 192, "duration": 2 }, { "pitch": "D#2", "x": 192, "duration": 8 }, { "pitch": "Bb2", "x": 192, "duration": 8 }, { "pitch": "D#3", "x": 192, "duration": 8 }, { "pitch": "A5", "x": 194, "duration": 2 }, { "pitch": "G5", "x": 196, "duration": 2 }, { "pitch": "D5", "x": 198, "duration": 2 }, { "pitch": "C6", "x": 200, "duration": 2 }, { "pitch": "D2", "x": 200, "duration": 8 }, { "pitch": "A2", "x": 200, "duration": 8 }, { "pitch": "D3", "x": 200, "duration": 8 }, { "pitch": "Bb5", "x": 202, "duration": 2 }, { "pitch": "A5", "x": 204, "duration": 2 }, { "pitch": "G5", "x": 206, "duration": 2 }, { "pitch": "Bb5", "x": 208, "duration": 2 }, { "pitch": "G2", "x": 208, "duration": 4 }, { "pitch": "Bb2", "x": 208, "duration": 4 }, { "pitch": "G3", "x": 208, "duration": 4 }, { "pitch": "A5", "x": 210, "duration": 2 }, { "pitch": "G5", "x": 212, "duration": 2 }, { "pitch": "Bb2", "x": 212, "duration": 4 }, { "pitch": "D5", "x": 214, "duration": 2 }, { "pitch": "Bb5", "x": 216, "duration": 2 }, { "pitch": "Bb2", "x": 216, "duration": 4 }, { "pitch": "A5", "x": 218, "duration": 2 }, { "pitch": "G5", "x": 220, "duration": 2 }, { "pitch": "Bb2", "x": 220, "duration": 4 }, { "pitch": "D5", "x": 222, "duration": 2 }, { "pitch": "Bb5", "x": 224, "duration": 2 }, { "pitch": "D#2", "x": 224, "duration": 4 }, { "pitch": "Bb2", "x": 224, "duration": 4 }, { "pitch": "D#3", "x": 224, "duration": 4 }, { "pitch": "A5", "x": 226, "duration": 2 }, { "pitch": "G5", "x": 228, "duration": 2 }, { "pitch": "Bb2", "x": 228, "duration": 4 }, { "pitch": "D5", "x": 230, "duration": 2 }, { "pitch": "C6", "x": 232, "duration": 2 }, { "pitch": "D2", "x": 232, "duration": 4 }, { "pitch": "Bb2", "x": 232, "duration": 4 }, { "pitch": "D3", "x": 232, "duration": 4 }, { "pitch": "Bb5", "x": 234, "duration": 2 }, { "pitch": "A5", "x": 236, "duration": 2 }, { "pitch": "Bb2", "x": 236, "duration": 4 }, { "pitch": "Bb5", "x": 238, "duration": 2 }, { "pitch": "Bb5", "x": 240, "duration": 2 }, { "pitch": "G2", "x": 240, "duration": 4 }, { "pitch": "Bb2", "x": 240, "duration": 4 }, { "pitch": "D3", "x": 240, "duration": 4 }, { "pitch": "G3", "x": 240, "duration": 4 }, { "pitch": "A5", "x": 242, "duration": 2 }, { "pitch": "G5", "x": 244, "duration": 2 }, { "pitch": "G2", "x": 244, "duration": 4 }, { "pitch": "Bb2", "x": 244, "duration": 4 }, { "pitch": "D3", "x": 244, "duration": 4 }, { "pitch": "D5", "x": 246, "duration": 2 }, { "pitch": "Bb5", "x": 248, "duration": 2 }, { "pitch": "G2", "x": 248, "duration": 4 }, { "pitch": "Bb2", "x": 248, "duration": 4 }, { "pitch": "D3", "x": 248, "duration": 4 }, { "pitch": "A5", "x": 250, "duration": 2 }, { "pitch": "G5", "x": 252, "duration": 2 }, { "pitch": "G2", "x": 252, "duration": 4 }, { "pitch": "Bb2", "x": 252, "duration": 4 }, { "pitch": "D3", "x": 252, "duration": 4 }, { "pitch": "D5", "x": 254, "duration": 2 }, { "pitch": "Bb5", "x": 256, "duration": 2 }, { "pitch": "D#2", "x": 256, "duration": 4 }, { "pitch": "G2", "x": 256, "duration": 4 }, { "pitch": "Bb2", "x": 256, "duration": 4 }, { "pitch": "D#3", "x": 256, "duration": 4 }, { "pitch": "A5", "x": 258, "duration": 2 }, { "pitch": "G5", "x": 260, "duration": 2 }, { "pitch": "D#2", "x": 260, "duration": 4 }, { "pitch": "G2", "x": 260, "duration": 4 }, { "pitch": "Bb2", "x": 260, "duration": 4 }, { "pitch": "D5", "x": 262, "duration": 2 }, { "pitch": "C6", "x": 264, "duration": 2 }, { "pitch": "D2", "x": 264, "duration": 4 }, { "pitch": "F#2", "x": 264, "duration": 4 }, { "pitch": "A2", "x": 264, "duration": 4 }, { "pitch": "D3", "x": 264, "duration": 4 }, { "pitch": "Bb5", "x": 266, "duration": 2 }, { "pitch": "A5", "x": 268, "duration": 2 }, { "pitch": "D2", "x": 268, "duration": 4 }, { "pitch": "F#2", "x": 268, "duration": 4 }, { "pitch": "A2", "x": 268, "duration": 4 }, { "pitch": "D3", "x": 268, "duration": 4 }, { "pitch": "Bb5", "x": 270, "duration": 2 }, { "pitch": "D4", "x": 272, "duration": 2 }, { "pitch": "Bb4", "x": 272, "duration": 2 }, { "pitch": "G2", "x": 272, "duration": 4 }, { "pitch": "D3", "x": 272, "duration": 4 }, { "pitch": "G3", "x": 272, "duration": 4 }, { "pitch": "G4", "x": 274, "duration": 2 }, { "pitch": "G2", "x": 276, "duration": 4 }, { "pitch": "D3", "x": 276, "duration": 4 }, { "pitch": "Bb4", "x": 278, "duration": 1 }, { "pitch": "G4", "x": 279, "duration": 1 }, { "pitch": "D4", "x": 280, "duration": 1 }, { "pitch": "Bb4", "x": 280, "duration": 1 }, { "pitch": "G2", "x": 280, "duration": 4 }, { "pitch": "D3", "x": 280, "duration": 4 }, { "pitch": "G4", "x": 281, "duration": 2 }, { "pitch": "G2", "x": 284, "duration": 4 }, { "pitch": "D3", "x": 284, "duration": 4 }, { "pitch": "Bb4", "x": 286, "duration": 1 }, { "pitch": "G4", "x": 287, "duration": 1 }, { "pitch": "D#4", "x": 288, "duration": 1 }, { "pitch": "Bb4", "x": 288, "duration": 1 }, { "pitch": "D#2", "x": 288, "duration": 4 }, { "pitch": "Bb2", "x": 288, "duration": 4 }, { "pitch": "D#3", "x": 288, "duration": 4 }, { "pitch": "G4", "x": 289, "duration": 2 }, { "pitch": "D#2", "x": 292, "duration": 4 }, { "pitch": "Bb2", "x": 292, "duration": 4 }, { "pitch": "Bb4", "x": 294, "duration": 1 }, { "pitch": "G4", "x": 295, "duration": 1 }, { "pitch": "D4", "x": 296, "duration": 1 }, { "pitch": "Bb4", "x": 296, "duration": 1 }, { "pitch": "D2", "x": 296, "duration": 4 }, { "pitch": "A2", "x": 296, "duration": 4 }, { "pitch": "D3", "x": 296, "duration": 4 }, { "pitch": "G4", "x": 297, "duration": 1 }, { "pitch": "Bb4", "x": 298, "duration": 1 }, { "pitch": "G4", "x": 299, "duration": 1 }, { "pitch": "Bb4", "x": 300, "duration": 1 }, { "pitch": "D2", "x": 300, "duration": 4 }, { "pitch": "A2", "x": 300, "duration": 4 }, { "pitch": "G4", "x": 301, "duration": 1 }, { "pitch": "Bb4", "x": 302, "duration": 1 }, { "pitch": "G4", "x": 303, "duration": 1 }, { "pitch": "D4", "x": 304, "duration": 1 }, { "pitch": "Bb4", "x": 304, "duration": 1 }, { "pitch": "G2", "x": 304, "duration": 4 }, { "pitch": "D3", "x": 304, "duration": 4 }, { "pitch": "G3", "x": 304, "duration": 4 }, { "pitch": "A4", "x": 305, "duration": 2 }, { "pitch": "G2", "x": 308, "duration": 4 }, { "pitch": "D3", "x": 308, "duration": 4 }, { "pitch": "Bb4", "x": 310, "duration": 1 }, { "pitch": "A4", "x": 311, "duration": 1 }, { "pitch": "D4", "x": 312, "duration": 1 }, { "pitch": "Bb4", "x": 312, "duration": 1 }, { "pitch": "G2", "x": 312, "duration": 4 }, { "pitch": "D3", "x": 312, "duration": 4 }, { "pitch": "A4", "x": 313, "duration": 2 }, { "pitch": "G2", "x": 316, "duration": 4 }, { "pitch": "D3", "x": 316, "duration": 4 }, { "pitch": "Bb4", "x": 318, "duration": 1 }, { "pitch": "A4", "x": 319, "duration": 1 }, { "pitch": "D#4", "x": 320, "duration": 1 }, { "pitch": "Bb4", "x": 320, "duration": 1 }, { "pitch": "D#2", "x": 320, "duration": 4 }, { "pitch": "Bb2", "x": 320, "duration": 4 }, { "pitch": "D#3", "x": 320, "duration": 4 }, { "pitch": "A4", "x": 321, "duration": 2 }, { "pitch": "D#2", "x": 324, "duration": 4 }, { "pitch": "Bb2", "x": 324, "duration": 4 }, { "pitch": "Bb4", "x": 326, "duration": 1 }, { "pitch": "A4", "x": 327, "duration": 1 }, { "pitch": "D4", "x": 328, "duration": 1 }, { "pitch": "Bb4", "x": 328, "duration": 1 }, { "pitch": "D2", "x": 328, "duration": 2 }, { "pitch": "F#2", "x": 328, "duration": 2 }, { "pitch": "A2", "x": 328, "duration": 2 }, { "pitch": "D3", "x": 328, "duration": 2 }, { "pitch": "A4", "x": 329, "duration": 1 }, { "pitch": "Bb4", "x": 330, "duration": 1 }, { "pitch": "F#2", "x": 330, "duration": 2 }, { "pitch": "A2", "x": 330, "duration": 2 }, { "pitch": "D3", "x": 330, "duration": 2 }, { "pitch": "F#3", "x": 330, "duration": 2 }, { "pitch": "A4", "x": 331, "duration": 1 }, { "pitch": "Bb4", "x": 332, "duration": 1 }, { "pitch": "A2", "x": 332, "duration": 2 }, { "pitch": "D3", "x": 332, "duration": 2 }, { "pitch": "F#3", "x": 332, "duration": 2 }, { "pitch": "A3", "x": 332, "duration": 2 }, { "pitch": "A4", "x": 333, "duration": 1 }, { "pitch": "Bb4", "x": 334, "duration": 1 }, { "pitch": "D3", "x": 334, "duration": 2 }, { "pitch": "F#3", "x": 334, "duration": 2 }, { "pitch": "A3", "x": 334, "duration": 2 }, { "pitch": "D4", "x": 334, "duration": 2 }, { "pitch": "A4", "x": 335, "duration": 1 }, { "pitch": "Bb4", "x": 336, "duration": 2 }, { "pitch": "Bb5", "x": 336, "duration": 2 }, { "pitch": "G1", "x": 336, "duration": 4 }, { "pitch": "G2", "x": 336, "duration": 4 }, { "pitch": "G4", "x": 338, "duration": 2 }, { "pitch": "G5", "x": 338, "duration": 2 }, { "pitch": "D3", "x": 340, "duration": 4 }, { "pitch": "G3", "x": 340, "duration": 4 }, { "pitch": "Bb3", "x": 340, "duration": 4 }, { "pitch": "Bb4", "x": 342, "duration": 1 }, { "pitch": "Bb5", "x": 342, "duration": 1 }, { "pitch": "G4", "x": 343, "duration": 1 }, { "pitch": "G5", "x": 343, "duration": 1 }, { "pitch": "Bb4", "x": 344, "duration": 1 }, { "pitch": "Bb5", "x": 344, "duration": 1 }, { "pitch": "G1", "x": 344, "duration": 4 }, { "pitch": "G2", "x": 344, "duration": 4 }, { "pitch": "G4", "x": 345, "duration": 1 }, { "pitch": "G5", "x": 345, "duration": 1 }, { "pitch": "G4", "x": 346, "duration": 1 }, { "pitch": "G5", "x": 346, "duration": 1 }, { "pitch": "D3", "x": 348, "duration": 4 }, { "pitch": "G3", "x": 348, "duration": 4 }, { "pitch": "Bb3", "x": 348, "duration": 4 }, { "pitch": "Bb4", "x": 350, "duration": 1 }, { "pitch": "Bb5", "x": 350, "duration": 1 }, { "pitch": "G4", "x": 351, "duration": 1 }, { "pitch": "G5", "x": 351, "duration": 1 }, { "pitch": "Bb4", "x": 352, "duration": 1 }, { "pitch": "Bb5", "x": 352, "duration": 1 }, { "pitch": "D#1", "x": 352, "duration": 4 }, { "pitch": "D#2", "x": 352, "duration": 4 }, { "pitch": "G4", "x": 353, "duration": 1 }, { "pitch": "G5", "x": 353, "duration": 1 }, { "pitch": "G4", "x": 354, "duration": 1 }, { "pitch": "G5", "x": 354, "duration": 1 }, { "pitch": "D#3", "x": 356, "duration": 4 }, { "pitch": "G3", "x": 356, "duration": 4 }, { "pitch": "Bb3", "x": 356, "duration": 4 }, { "pitch": "D#4", "x": 356, "duration": 4 }, { "pitch": "Bb4", "x": 358, "duration": 1 }, { "pitch": "Bb5", "x": 358, "duration": 1 }, { "pitch": "G4", "x": 359, "duration": 1 }, { "pitch": "G5", "x": 359, "duration": 1 }, { "pitch": "Bb4", "x": 360, "duration": 1 }, { "pitch": "Bb5", "x": 360, "duration": 1 }, { "pitch": "D1", "x": 360, "duration": 4 }, { "pitch": "D2", "x": 360, "duration": 4 }, { "pitch": "G4", "x": 361, "duration": 1 }, { "pitch": "G5", "x": 361, "duration": 1 }, { "pitch": "Bb4", "x": 362, "duration": 1 }, { "pitch": "Bb5", "x": 362, "duration": 1 }, { "pitch": "G4", "x": 363, "duration": 1 }, { "pitch": "G5", "x": 363, "duration": 1 }, { "pitch": "Bb4", "x": 364, "duration": 1 }, { "pitch": "Bb5", "x": 364, "duration": 1 }, { "pitch": "D3", "x": 364, "duration": 4 }, { "pitch": "F#3", "x": 364, "duration": 4 }, { "pitch": "A3", "x": 364, "duration": 4 }, { "pitch": "D4", "x": 364, "duration": 4 }, { "pitch": "G4", "x": 365, "duration": 1 }, { "pitch": "G5", "x": 365, "duration": 1 }, { "pitch": "Bb4", "x": 366, "duration": 1 }, { "pitch": "Bb5", "x": 366, "duration": 1 }, { "pitch": "G4", "x": 367, "duration": 1 }, { "pitch": "G5", "x": 367, "duration": 1 }, { "pitch": "Bb4", "x": 368, "duration": 1 }, { "pitch": "Bb5", "x": 368, "duration": 1 }, { "pitch": "G1", "x": 368, "duration": 4 }, { "pitch": "G2", "x": 368, "duration": 4 }, { "pitch": "A4", "x": 369, "duration": 1 }, { "pitch": "A5", "x": 369, "duration": 1 }, { "pitch": "A4", "x": 370, "duration": 1 }, { "pitch": "A5", "x": 370, "duration": 1 }, { "pitch": "D3", "x": 372, "duration": 4 }, { "pitch": "G3", "x": 372, "duration": 4 }, { "pitch": "Bb3", "x": 372, "duration": 4 }, { "pitch": "Bb4", "x": 374, "duration": 1 }, { "pitch": "Bb5", "x": 374, "duration": 1 }, { "pitch": "A4", "x": 375, "duration": 1 }, { "pitch": "A5", "x": 375, "duration": 1 }, { "pitch": "Bb4", "x": 376, "duration": 1 }, { "pitch": "Bb5", "x": 376, "duration": 1 }, { "pitch": "G1", "x": 376, "duration": 4 }, { "pitch": "G2", "x": 376, "duration": 4 }, { "pitch": "A4", "x": 377, "duration": 1 }, { "pitch": "A5", "x": 377, "duration": 1 }, { "pitch": "A4", "x": 378, "duration": 1 }, { "pitch": "A5", "x": 378, "duration": 1 }, { "pitch": "D3", "x": 380, "duration": 4 }, { "pitch": "G3", "x": 380, "duration": 4 }, { "pitch": "Bb3", "x": 380, "duration": 4 }, { "pitch": "Bb4", "x": 382, "duration": 1 }, { "pitch": "Bb5", "x": 382, "duration": 1 }, { "pitch": "A4", "x": 383, "duration": 1 }, { "pitch": "A5", "x": 383, "duration": 1 }, { "pitch": "Bb4", "x": 384, "duration": 1 }, { "pitch": "Bb5", "x": 384, "duration": 1 }, { "pitch": "D#1", "x": 384, "duration": 4 }, { "pitch": "D#2", "x": 384, "duration": 4 }, { "pitch": "A4", "x": 385, "duration": 1 }, { "pitch": "A5", "x": 385, "duration": 1 }, { "pitch": "A4", "x": 386, "duration": 1 }, { "pitch": "A5", "x": 386, "duration": 1 }, { "pitch": "D#3", "x": 388, "duration": 4 }, { "pitch": "G3", "x": 388, "duration": 4 }, { "pitch": "Bb3", "x": 388, "duration": 4 }, { "pitch": "D#4", "x": 388, "duration": 4 }, { "pitch": "Bb4", "x": 390, "duration": 1 }, { "pitch": "Bb5", "x": 390, "duration": 1 }, { "pitch": "A4", "x": 391, "duration": 1 }, { "pitch": "A5", "x": 391, "duration": 1 }, { "pitch": "Bb4", "x": 392, "duration": 1 }, { "pitch": "Bb5", "x": 392, "duration": 1 }, { "pitch": "D1", "x": 392, "duration": 4 }, { "pitch": "D2", "x": 392, "duration": 4 }, { "pitch": "A4", "x": 393, "duration": 1 }, { "pitch": "A5", "x": 393, "duration": 1 }, { "pitch": "Bb4", "x": 394, "duration": 1 }, { "pitch": "Bb5", "x": 394, "duration": 1 }, { "pitch": "A4", "x": 395, "duration": 1 }, { "pitch": "A5", "x": 395, "duration": 1 }, { "pitch": "Bb4", "x": 396, "duration": 1 }, { "pitch": "Bb5", "x": 396, "duration": 1 }, { "pitch": "D3", "x": 396, "duration": 4 }, { "pitch": "F#3", "x": 396, "duration": 4 }, { "pitch": "A3", "x": 396, "duration": 4 }, { "pitch": "D4", "x": 396, "duration": 4 }, { "pitch": "A4", "x": 397, "duration": 1 }, { "pitch": "A5", "x": 397, "duration": 1 }, { "pitch": "Bb4", "x": 398, "duration": 1 }, { "pitch": "Bb5", "x": 398, "duration": 1 }, { "pitch": "A4", "x": 399, "duration": 1 }, { "pitch": "A5", "x": 399, "duration": 1 }, { "pitch": "G1", "x": 400, "duration": 1 }, { "pitch": "G2", "x": 400, "duration": 1 }, { "pitch": "Bb4", "x": 400, "duration": 2 }, { "pitch": "D5", "x": 400, "duration": 2 }, { "pitch": "G5", "x": 400, "duration": 2 }, { "pitch": "Bb5", "x": 400, "duration": 2 }, { "pitch": "G2", "x": 401, "duration": 1 }, { "pitch": "G1", "x": 401, "duration": 1 }, { "pitch": "A4", "x": 402, "duration": 2 }, { "pitch": "D5", "x": 402, "duration": 2 }, { "pitch": "G5", "x": 402, "duration": 2 }, { "pitch": "A5", "x": 402, "duration": 2 }, { "pitch": "G2", "x": 404, "duration": 1 }, { "pitch": "D3", "x": 404, "duration": 1 }, { "pitch": "G3", "x": 404, "duration": 1 }, { "pitch": "G4", "x": 404, "duration": 2 }, { "pitch": "Bb4", "x": 404, "duration": 2 }, { "pitch": "D5", "x": 404, "duration": 2 }, { "pitch": "G5", "x": 404, "duration": 2 }, { "pitch": "G3", "x": 405, "duration": 1 }, { "pitch": "G2", "x": 405, "duration": 1 }, { "pitch": "D3", "x": 405, "duration": 1 }, { "pitch": "Bb4", "x": 406, "duration": 1 }, { "pitch": "Bb5", "x": 406, "duration": 1 }, { "pitch": "Bb4", "x": 407, "duration": 1 }, { "pitch": "Bb5", "x": 407, "duration": 1 }, { "pitch": "D5", "x": 408, "duration": 1 }, { "pitch": "G5", "x": 408, "duration": 1 }, { "pitch": "Bb5", "x": 408, "duration": 1 }, { "pitch": "G1", "x": 408, "duration": 1 }, { "pitch": "G2", "x": 408, "duration": 1 }, { "pitch": "Bb4", "x": 408, "duration": 1 }, { "pitch": "A4", "x": 409, "duration": 1 }, { "pitch": "D5", "x": 409, "duration": 1 }, { "pitch": "G5", "x": 409, "duration": 1 }, { "pitch": "A5", "x": 409, "duration": 1 }, { "pitch": "G1", "x": 409, "duration": 1 }, { "pitch": "G2", "x": 409, "duration": 1 }, { "pitch": "A4", "x": 410, "duration": 1 }, { "pitch": "D5", "x": 410, "duration": 1 }, { "pitch": "G5", "x": 410, "duration": 1 }, { "pitch": "A5", "x": 410, "duration": 1 }, { "pitch": "G1", "x": 410, "duration": 1 }, { "pitch": "G2", "x": 410, "duration": 1 }, { "pitch": "D5", "x": 411, "duration": 1 }, { "pitch": "G5", "x": 411, "duration": 1 }, { "pitch": "A5", "x": 411, "duration": 1 }, { "pitch": "G2", "x": 411, "duration": 1 }, { "pitch": "A4", "x": 411, "duration": 1 }, { "pitch": "G1", "x": 411, "duration": 1 }, { "pitch": "G2", "x": 412, "duration": 1 }, { "pitch": "D3", "x": 412, "duration": 1 }, { "pitch": "G3", "x": 412, "duration": 1 }, { "pitch": "G4", "x": 412, "duration": 2 }, { "pitch": "Bb4", "x": 412, "duration": 2 }, { "pitch": "D5", "x": 412, "duration": 2 }, { "pitch": "G5", "x": 412, "duration": 2 }, { "pitch": "G3", "x": 413, "duration": 1 }, { "pitch": "G2", "x": 413, "duration": 1 }, { "pitch": "D3", "x": 413, "duration": 1 }, { "pitch": "Bb4", "x": 414, "duration": 1 }, { "pitch": "Bb5", "x": 414, "duration": 1 }, { "pitch": "Bb4", "x": 415, "duration": 1 }, { "pitch": "Bb5", "x": 415, "duration": 1 }, { "pitch": "D#5", "x": 416, "duration": 1 }, { "pitch": "G5", "x": 416, "duration": 1 }, { "pitch": "Bb5", "x": 416, "duration": 1 }, { "pitch": "D#1", "x": 416, "duration": 1 }, { "pitch": "D#2", "x": 416, "duration": 1 }, { "pitch": "Bb4", "x": 416, "duration": 1 }, { "pitch": "A4", "x": 417, "duration": 1 }, { "pitch": "D#5", "x": 417, "duration": 1 }, { "pitch": "G5", "x": 417, "duration": 1 }, { "pitch": "A5", "x": 417, "duration": 1 }, { "pitch": "D#1", "x": 417, "duration": 1 }, { "pitch": "D#2", "x": 417, "duration": 1 }, { "pitch": "A4", "x": 418, "duration": 1 }, { "pitch": "D#5", "x": 418, "duration": 1 }, { "pitch": "G5", "x": 418, "duration": 1 }, { "pitch": "A5", "x": 418, "duration": 1 }, { "pitch": "D#1", "x": 418, "duration": 1 }, { "pitch": "D#2", "x": 418, "duration": 1 }, { "pitch": "D#5", "x": 419, "duration": 1 }, { "pitch": "G5", "x": 419, "duration": 1 }, { "pitch": "A5", "x": 419, "duration": 1 }, { "pitch": "D#2", "x": 419, "duration": 1 }, { "pitch": "A4", "x": 419, "duration": 1 }, { "pitch": "D#1", "x": 419, "duration": 1 }, { "pitch": "D#2", "x": 420, "duration": 1 }, { "pitch": "Bb2", "x": 420, "duration": 1 }, { "pitch": "D#3", "x": 420, "duration": 1 }, { "pitch": "Bb4", "x": 420, "duration": 2 }, { "pitch": "G4", "x": 420, "duration": 2 }, { "pitch": "D#5", "x": 420, "duration": 2 }, { "pitch": "G5", "x": 420, "duration": 2 }, { "pitch": "D#3", "x": 421, "duration": 1 }, { "pitch": "D#2", "x": 421, "duration": 1 }, { "pitch": "Bb2", "x": 421, "duration": 1 }, { "pitch": "G4", "x": 422, "duration": 1 }, { "pitch": "G5", "x": 422, "duration": 1 }, { "pitch": "G4", "x": 423, "duration": 1 }, { "pitch": "G5", "x": 423, "duration": 1 }, { "pitch": "G4", "x": 424, "duration": 1 }, { "pitch": "D5", "x": 424, "duration": 1 }, { "pitch": "G5", "x": 424, "duration": 1 }, { "pitch": "D1", "x": 424, "duration": 1 }, { "pitch": "D2", "x": 424, "duration": 1 }, { "pitch": "A4", "x": 425, "duration": 1 }, { "pitch": "D5", "x": 425, "duration": 1 }, { "pitch": "A5", "x": 425, "duration": 1 }, { "pitch": "D1", "x": 425, "duration": 1 }, { "pitch": "D2", "x": 425, "duration": 1 }, { "pitch": "A4", "x": 426, "duration": 1 }, { "pitch": "D5", "x": 426, "duration": 1 }, { "pitch": "A5", "x": 426, "duration": 1 }, { "pitch": "D1", "x": 426, "duration": 1 }, { "pitch": "D2", "x": 426, "duration": 1 }, { "pitch": "A4", "x": 427, "duration": 1 }, { "pitch": "D5", "x": 427, "duration": 1 }, { "pitch": "A5", "x": 427, "duration": 1 }, { "pitch": "D2", "x": 427, "duration": 1 }, { "pitch": "D1", "x": 427, "duration": 1 }, { "pitch": "A4", "x": 428, "duration": 1 }, { "pitch": "D5", "x": 428, "duration": 1 }, { "pitch": "F#5", "x": 428, "duration": 1 }, { "pitch": "A5", "x": 428, "duration": 1 }, { "pitch": "D2", "x": 428, "duration": 1 }, { "pitch": "A2", "x": 428, "duration": 1 }, { "pitch": "D3", "x": 428, "duration": 1 }, { "pitch": "Bb4", "x": 429, "duration": 1 }, { "pitch": "D5", "x": 429, "duration": 1 }, { "pitch": "F#5", "x": 429, "duration": 1 }, { "pitch": "Bb5", "x": 429, "duration": 1 }, { "pitch": "D3", "x": 429, "duration": 1 }, { "pitch": "D2", "x": 429, "duration": 1 }, { "pitch": "A2", "x": 429, "duration": 1 }, { "pitch": "Bb4", "x": 430, "duration": 1 }, { "pitch": "D5", "x": 430, "duration": 1 }, { "pitch": "F#5", "x": 430, "duration": 1 }, { "pitch": "Bb5", "x": 430, "duration": 1 }, { "pitch": "D5", "x": 431, "duration": 1 }, { "pitch": "Bb4", "x": 431, "duration": 1 }, { "pitch": "F#5", "x": 431, "duration": 1 }, { "pitch": "Bb5", "x": 431, "duration": 1 }, { "pitch": "Bb5", "x": 432, "duration": 2 }, { "pitch": "G2", "x": 432, "duration": 4 }, { "pitch": "Bb2", "x": 432, "duration": 4 }, { "pitch": "G3", "x": 432, "duration": 4 }, { "pitch": "A5", "x": 434, "duration": 2 }, { "pitch": "G5", "x": 436, "duration": 2 }, { "pitch": "Bb2", "x": 436, "duration": 4 }, { "pitch": "D5", "x": 438, "duration": 2 }, { "pitch": "Bb5", "x": 440, "duration": 2 }, { "pitch": "Bb2", "x": 440, "duration": 4 }, { "pitch": "A5", "x": 442, "duration": 2 }, { "pitch": "G5", "x": 444, "duration": 2 }, { "pitch": "Bb2", "x": 444, "duration": 4 }, { "pitch": "D5", "x": 446, "duration": 2 }, { "pitch": "Bb5", "x": 448, "duration": 2 }, { "pitch": "D#2", "x": 448, "duration": 4 }, { "pitch": "Bb2", "x": 448, "duration": 4 }, { "pitch": "D#3", "x": 448, "duration": 4 }, { "pitch": "A5", "x": 450, "duration": 2 }, { "pitch": "G5", "x": 452, "duration": 2 }, { "pitch": "Bb2", "x": 452, "duration": 4 }, { "pitch": "D5", "x": 454, "duration": 2 }, { "pitch": "C6", "x": 456, "duration": 2 }, { "pitch": "D2", "x": 456, "duration": 4 }, { "pitch": "Bb2", "x": 456, "duration": 4 }, { "pitch": "D3", "x": 456, "duration": 4 }, { "pitch": "Bb5", "x": 458, "duration": 2 }, { "pitch": "A5", "x": 460, "duration": 2 }, { "pitch": "Bb2", "x": 460, "duration": 4 }, { "pitch": "Bb5", "x": 462, "duration": 2 }, { "pitch": "Bb5", "x": 464, "duration": 2 }, { "pitch": "G2", "x": 464, "duration": 4 }, { "pitch": "Bb2", "x": 464, "duration": 4 }, { "pitch": "D3", "x": 464, "duration": 4 }, { "pitch": "G3", "x": 464, "duration": 4 }, { "pitch": "A5", "x": 466, "duration": 2 }, { "pitch": "G5", "x": 468, "duration": 2 }, { "pitch": "G2", "x": 468, "duration": 4 }, { "pitch": "Bb2", "x": 468, "duration": 4 }, { "pitch": "D3", "x": 468, "duration": 4 }, { "pitch": "D5", "x": 470, "duration": 2 }, { "pitch": "Bb5", "x": 472, "duration": 2 }, { "pitch": "G2", "x": 472, "duration": 4 }, { "pitch": "Bb2", "x": 472, "duration": 4 }, { "pitch": "D3", "x": 472, "duration": 4 }, { "pitch": "A5", "x": 474, "duration": 2 }, { "pitch": "G5", "x": 476, "duration": 2 }, { "pitch": "G2", "x": 476, "duration": 4 }, { "pitch": "Bb2", "x": 476, "duration": 4 }, { "pitch": "D3", "x": 476, "duration": 4 }, { "pitch": "D5", "x": 478, "duration": 2 }, { "pitch": "Bb5", "x": 480, "duration": 2 }, { "pitch": "D#2", "x": 480, "duration": 4 }, { "pitch": "G2", "x": 480, "duration": 4 }, { "pitch": "Bb2", "x": 480, "duration": 4 }, { "pitch": "D#3", "x": 480, "duration": 4 }, { "pitch": "A5", "x": 482, "duration": 2 }, { "pitch": "G5", "x": 484, "duration": 2 }, { "pitch": "D#2", "x": 484, "duration": 4 }, { "pitch": "G2", "x": 484, "duration": 4 }, { "pitch": "Bb2", "x": 484, "duration": 4 }, { "pitch": "D5", "x": 486, "duration": 2 }, { "pitch": "C6", "x": 488, "duration": 2 }, { "pitch": "D2", "x": 488, "duration": 4 }, { "pitch": "F#2", "x": 488, "duration": 4 }, { "pitch": "A2", "x": 488, "duration": 4 }, { "pitch": "D3", "x": 488, "duration": 4 }, { "pitch": "Bb5", "x": 490, "duration": 2 }, { "pitch": "A5", "x": 492, "duration": 2 }, { "pitch": "D2", "x": 492, "duration": 4 }, { "pitch": "F#2", "x": 492, "duration": 4 }, { "pitch": "A2", "x": 492, "duration": 4 }, { "pitch": "D3", "x": 492, "duration": 4 }, { "pitch": "Bb5", "x": 494, "duration": 2 }, { "pitch": "D4", "x": 496, "duration": 2 }, { "pitch": "Bb4", "x": 496, "duration": 2 }, { "pitch": "G2", "x": 496, "duration": 4 }, { "pitch": "D3", "x": 496, "duration": 4 }, { "pitch": "G3", "x": 496, "duration": 4 }, { "pitch": "G4", "x": 498, "duration": 2 }, { "pitch": "G2", "x": 500, "duration": 4 }, { "pitch": "D3", "x": 500, "duration": 4 }, { "pitch": "Bb4", "x": 502, "duration": 1 }, { "pitch": "G4", "x": 503, "duration": 1 }, { "pitch": "D4", "x": 504, "duration": 1 }, { "pitch": "Bb4", "x": 504, "duration": 1 }, { "pitch": "G2", "x": 504, "duration": 4 }, { "pitch": "D3", "x": 504, "duration": 4 }, { "pitch": "G4", "x": 505, "duration": 2 }, { "pitch": "G2", "x": 508, "duration": 4 }, { "pitch": "D3", "x": 508, "duration": 4 }, { "pitch": "Bb4", "x": 510, "duration": 1 }, { "pitch": "G4", "x": 511, "duration": 1 }, { "pitch": "D#4", "x": 512, "duration": 1 }, { "pitch": "Bb4", "x": 512, "duration": 1 }, { "pitch": "D#2", "x": 512, "duration": 4 }, { "pitch": "Bb2", "x": 512, "duration": 4 }, { "pitch": "D#3", "x": 512, "duration": 4 }, { "pitch": "G4", "x": 513, "duration": 2 }, { "pitch": "D#2", "x": 516, "duration": 4 }, { "pitch": "Bb2", "x": 516, "duration": 4 }, { "pitch": "Bb4", "x": 518, "duration": 1 }, { "pitch": "G4", "x": 519, "duration": 1 }, { "pitch": "D4", "x": 520, "duration": 1 }, { "pitch": "Bb4", "x": 520, "duration": 1 }, { "pitch": "D2", "x": 520, "duration": 4 }, { "pitch": "A2", "x": 520, "duration": 4 }, { "pitch": "D3", "x": 520, "duration": 4 }, { "pitch": "G4", "x": 521, "duration": 1 }, { "pitch": "Bb4", "x": 522, "duration": 1 }, { "pitch": "G4", "x": 523, "duration": 1 }, { "pitch": "Bb4", "x": 524, "duration": 1 }, { "pitch": "D2", "x": 524, "duration": 4 }, { "pitch": "A2", "x": 524, "duration": 4 }, { "pitch": "G4", "x": 525, "duration": 1 }, { "pitch": "Bb4", "x": 526, "duration": 1 }, { "pitch": "G4", "x": 527, "duration": 1 }, { "pitch": "D4", "x": 528, "duration": 1 }, { "pitch": "Bb4", "x": 528, "duration": 1 }, { "pitch": "G2", "x": 528, "duration": 4 }, { "pitch": "D3", "x": 528, "duration": 4 }, { "pitch": "G3", "x": 528, "duration": 4 }, { "pitch": "A4", "x": 529, "duration": 2 }, { "pitch": "G2", "x": 532, "duration": 4 }, { "pitch": "D3", "x": 532, "duration": 4 }, { "pitch": "Bb4", "x": 534, "duration": 1 }, { "pitch": "A4", "x": 535, "duration": 1 }, { "pitch": "D4", "x": 536, "duration": 1 }, { "pitch": "Bb4", "x": 536, "duration": 1 }, { "pitch": "G2", "x": 536, "duration": 4 }, { "pitch": "D3", "x": 536, "duration": 4 }, { "pitch": "A4", "x": 537, "duration": 2 }, { "pitch": "G2", "x": 540, "duration": 4 }, { "pitch": "D3", "x": 540, "duration": 4 }, { "pitch": "Bb4", "x": 542, "duration": 1 }, { "pitch": "A4", "x": 543, "duration": 1 }, { "pitch": "D#4", "x": 544, "duration": 1 }, { "pitch": "Bb4", "x": 544, "duration": 1 }, { "pitch": "D#2", "x": 544, "duration": 4 }, { "pitch": "Bb2", "x": 544, "duration": 4 }, { "pitch": "D#3", "x": 544, "duration": 4 }, { "pitch": "A4", "x": 545, "duration": 2 }, { "pitch": "D#2", "x": 548, "duration": 4 }, { "pitch": "Bb2", "x": 548, "duration": 4 }, { "pitch": "Bb4", "x": 550, "duration": 1 }, { "pitch": "A4", "x": 551, "duration": 1 }, { "pitch": "D4", "x": 552, "duration": 1 }, { "pitch": "Bb4", "x": 552, "duration": 1 }, { "pitch": "D2", "x": 552, "duration": 2 }, { "pitch": "F#2", "x": 552, "duration": 2 }, { "pitch": "A2", "x": 552, "duration": 2 }, { "pitch": "D3", "x": 552, "duration": 2 }, { "pitch": "A4", "x": 553, "duration": 1 }, { "pitch": "Bb4", "x": 554, "duration": 1 }, { "pitch": "F#2", "x": 554, "duration": 2 }, { "pitch": "A2", "x": 554, "duration": 2 }, { "pitch": "D3", "x": 554, "duration": 2 }, { "pitch": "F#3", "x": 554, "duration": 2 }, { "pitch": "A4", "x": 555, "duration": 1 }, { "pitch": "Bb4", "x": 556, "duration": 1 }, { "pitch": "A2", "x": 556, "duration": 2 }, { "pitch": "D3", "x": 556, "duration": 2 }, { "pitch": "F#3", "x": 556, "duration": 2 }, { "pitch": "A3", "x": 556, "duration": 2 }, { "pitch": "A4", "x": 557, "duration": 1 }, { "pitch": "Bb4", "x": 558, "duration": 1 }, { "pitch": "D3", "x": 558, "duration": 2 }, { "pitch": "F#3", "x": 558, "duration": 2 }, { "pitch": "A3", "x": 558, "duration": 2 }, { "pitch": "D4", "x": 558, "duration": 2 }, { "pitch": "A4", "x": 559, "duration": 1 }, { "pitch": "Bb4", "x": 560, "duration": 2 }, { "pitch": "Bb5", "x": 560, "duration": 2 }, { "pitch": "G1", "x": 560, "duration": 4 }, { "pitch": "G2", "x": 560, "duration": 4 }, { "pitch": "G4", "x": 562, "duration": 2 }, { "pitch": "G5", "x": 562, "duration": 2 }, { "pitch": "D3", "x": 564, "duration": 4 }, { "pitch": "G3", "x": 564, "duration": 4 }, { "pitch": "Bb3", "x": 564, "duration": 4 }, { "pitch": "Bb4", "x": 566, "duration": 1 }, { "pitch": "Bb5", "x": 566, "duration": 1 }, { "pitch": "G4", "x": 567, "duration": 1 }, { "pitch": "G5", "x": 567, "duration": 1 }, { "pitch": "Bb4", "x": 568, "duration": 1 }, { "pitch": "Bb5", "x": 568, "duration": 1 }, { "pitch": "G1", "x": 568, "duration": 4 }, { "pitch": "G2", "x": 568, "duration": 4 }, { "pitch": "G4", "x": 569, "duration": 1 }, { "pitch": "G5", "x": 569, "duration": 1 }, { "pitch": "G4", "x": 570, "duration": 1 }, { "pitch": "G5", "x": 570, "duration": 1 }, { "pitch": "D3", "x": 572, "duration": 4 }, { "pitch": "G3", "x": 572, "duration": 4 }, { "pitch": "Bb3", "x": 572, "duration": 4 }, { "pitch": "Bb4", "x": 574, "duration": 1 }, { "pitch": "Bb5", "x": 574, "duration": 1 }, { "pitch": "G4", "x": 575, "duration": 1 }, { "pitch": "G5", "x": 575, "duration": 1 }, { "pitch": "Bb4", "x": 576, "duration": 1 }, { "pitch": "Bb5", "x": 576, "duration": 1 }, { "pitch": "D#1", "x": 576, "duration": 4 }, { "pitch": "D#2", "x": 576, "duration": 4 }, { "pitch": "G4", "x": 577, "duration": 1 }, { "pitch": "G5", "x": 577, "duration": 1 }, { "pitch": "G4", "x": 578, "duration": 1 }, { "pitch": "G5", "x": 578, "duration": 1 }, { "pitch": "D#3", "x": 580, "duration": 4 }, { "pitch": "G3", "x": 580, "duration": 4 }, { "pitch": "Bb3", "x": 580, "duration": 4 }, { "pitch": "D#4", "x": 580, "duration": 4 }, { "pitch": "Bb4", "x": 582, "duration": 1 }, { "pitch": "Bb5", "x": 582, "duration": 1 }, { "pitch": "G4", "x": 583, "duration": 1 }, { "pitch": "G5", "x": 583, "duration": 1 }, { "pitch": "Bb4", "x": 584, "duration": 1 }, { "pitch": "Bb5", "x": 584, "duration": 1 }, { "pitch": "D1", "x": 584, "duration": 4 }, { "pitch": "D2", "x": 584, "duration": 4 }, { "pitch": "G4", "x": 585, "duration": 1 }, { "pitch": "G5", "x": 585, "duration": 1 }, { "pitch": "Bb4", "x": 586, "duration": 1 }, { "pitch": "Bb5", "x": 586, "duration": 1 }, { "pitch": "G4", "x": 587, "duration": 1 }, { "pitch": "G5", "x": 587, "duration": 1 }, { "pitch": "Bb4", "x": 588, "duration": 1 }, { "pitch": "Bb5", "x": 588, "duration": 1 }, { "pitch": "D3", "x": 588, "duration": 4 }, { "pitch": "F#3", "x": 588, "duration": 4 }, { "pitch": "A3", "x": 588, "duration": 4 }, { "pitch": "D4", "x": 588, "duration": 4 }, { "pitch": "G4", "x": 589, "duration": 1 }, { "pitch": "G5", "x": 589, "duration": 1 }, { "pitch": "Bb4", "x": 590, "duration": 1 }, { "pitch": "Bb5", "x": 590, "duration": 1 }, { "pitch": "G4", "x": 591, "duration": 1 }, { "pitch": "G5", "x": 591, "duration": 1 }, { "pitch": "Bb4", "x": 592, "duration": 1 }, { "pitch": "Bb5", "x": 592, "duration": 1 }, { "pitch": "G1", "x": 592, "duration": 4 }, { "pitch": "G2", "x": 592, "duration": 4 }, { "pitch": "A4", "x": 593, "duration": 1 }, { "pitch": "A5", "x": 593, "duration": 1 }, { "pitch": "A4", "x": 594, "duration": 1 }, { "pitch": "A5", "x": 594, "duration": 1 }, { "pitch": "D3", "x": 596, "duration": 4 }, { "pitch": "G3", "x": 596, "duration": 4 }, { "pitch": "Bb3", "x": 596, "duration": 4 }, { "pitch": "Bb4", "x": 598, "duration": 1 }, { "pitch": "Bb5", "x": 598, "duration": 1 }, { "pitch": "A4", "x": 599, "duration": 1 }, { "pitch": "A5", "x": 599, "duration": 1 }, { "pitch": "Bb4", "x": 600, "duration": 1 }, { "pitch": "Bb5", "x": 600, "duration": 1 }, { "pitch": "G1", "x": 600, "duration": 4 }, { "pitch": "G2", "x": 600, "duration": 4 }, { "pitch": "A4", "x": 601, "duration": 1 }, { "pitch": "A5", "x": 601, "duration": 1 }, { "pitch": "A4", "x": 602, "duration": 1 }, { "pitch": "A5", "x": 602, "duration": 1 }, { "pitch": "D3", "x": 604, "duration": 4 }, { "pitch": "G3", "x": 604, "duration": 4 }, { "pitch": "Bb3", "x": 604, "duration": 4 }, { "pitch": "Bb4", "x": 606, "duration": 1 }, { "pitch": "Bb5", "x": 606, "duration": 1 }, { "pitch": "A4", "x": 607, "duration": 1 }, { "pitch": "A5", "x": 607, "duration": 1 }, { "pitch": "Bb4", "x": 608, "duration": 1 }, { "pitch": "Bb5", "x": 608, "duration": 1 }, { "pitch": "D#1", "x": 608, "duration": 4 }, { "pitch": "D#2", "x": 608, "duration": 4 }, { "pitch": "A4", "x": 609, "duration": 1 }, { "pitch": "A5", "x": 609, "duration": 1 }, { "pitch": "A4", "x": 610, "duration": 1 }, { "pitch": "A5", "x": 610, "duration": 1 }, { "pitch": "D#3", "x": 612, "duration": 4 }, { "pitch": "G3", "x": 612, "duration": 4 }, { "pitch": "Bb3", "x": 612, "duration": 4 }, { "pitch": "D#4", "x": 612, "duration": 4 }, { "pitch": "Bb4", "x": 614, "duration": 1 }, { "pitch": "Bb5", "x": 614, "duration": 1 }, { "pitch": "A4", "x": 615, "duration": 1 }, { "pitch": "A5", "x": 615, "duration": 1 }, { "pitch": "Bb4", "x": 616, "duration": 1 }, { "pitch": "Bb5", "x": 616, "duration": 1 }, { "pitch": "D1", "x": 616, "duration": 4 }, { "pitch": "D2", "x": 616, "duration": 4 }, { "pitch": "A4", "x": 617, "duration": 1 }, { "pitch": "A5", "x": 617, "duration": 1 }, { "pitch": "Bb4", "x": 618, "duration": 1 }, { "pitch": "Bb5", "x": 618, "duration": 1 }, { "pitch": "A4", "x": 619, "duration": 1 }, { "pitch": "A5", "x": 619, "duration": 1 }, { "pitch": "Bb4", "x": 620, "duration": 1 }, { "pitch": "Bb5", "x": 620, "duration": 1 }, { "pitch": "D3", "x": 620, "duration": 4 }, { "pitch": "F#3", "x": 620, "duration": 4 }, { "pitch": "A3", "x": 620, "duration": 4 }, { "pitch": "D4", "x": 620, "duration": 4 }, { "pitch": "A4", "x": 621, "duration": 1 }, { "pitch": "A5", "x": 621, "duration": 1 }, { "pitch": "Bb4", "x": 622, "duration": 1 }, { "pitch": "Bb5", "x": 622, "duration": 1 }, { "pitch": "A4", "x": 623, "duration": 1 }, { "pitch": "A5", "x": 623, "duration": 1 }, { "pitch": "G1", "x": 624, "duration": 1 }, { "pitch": "G2", "x": 624, "duration": 1 }, { "pitch": "Bb4", "x": 624, "duration": 2 }, { "pitch": "D5", "x": 624, "duration": 2 }, { "pitch": "G5", "x": 624, "duration": 2 }, { "pitch": "Bb5", "x": 624, "duration": 2 }, { "pitch": "G2", "x": 625, "duration": 1 }, { "pitch": "G1", "x": 625, "duration": 1 }, { "pitch": "A4", "x": 626, "duration": 2 }, { "pitch": "D5", "x": 626, "duration": 2 }, { "pitch": "G5", "x": 626, "duration": 2 }, { "pitch": "A5", "x": 626, "duration": 2 }, { "pitch": "G2", "x": 628, "duration": 1 }, { "pitch": "D3", "x": 628, "duration": 1 }, { "pitch": "G3", "x": 628, "duration": 1 }, { "pitch": "G4", "x": 628, "duration": 2 }, { "pitch": "Bb4", "x": 628, "duration": 2 }, { "pitch": "D5", "x": 628, "duration": 2 }, { "pitch": "G5", "x": 628, "duration": 2 }, { "pitch": "G3", "x": 629, "duration": 1 }, { "pitch": "G2", "x": 629, "duration": 1 }, { "pitch": "D3", "x": 629, "duration": 1 }, { "pitch": "Bb4", "x": 630, "duration": 1 }, { "pitch": "Bb5", "x": 630, "duration": 1 }, { "pitch": "Bb4", "x": 631, "duration": 1 }, { "pitch": "Bb5", "x": 631, "duration": 1 }, { "pitch": "D5", "x": 632, "duration": 1 }, { "pitch": "G5", "x": 632, "duration": 1 }, { "pitch": "Bb5", "x": 632, "duration": 1 }, { "pitch": "G1", "x": 632, "duration": 1 }, { "pitch": "G2", "x": 632, "duration": 1 }, { "pitch": "Bb4", "x": 632, "duration": 1 }, { "pitch": "A4", "x": 633, "duration": 1 }, { "pitch": "D5", "x": 633, "duration": 1 }, { "pitch": "G5", "x": 633, "duration": 1 }, { "pitch": "A5", "x": 633, "duration": 1 }, { "pitch": "G1", "x": 633, "duration": 1 }, { "pitch": "G2", "x": 633, "duration": 1 }, { "pitch": "A4", "x": 634, "duration": 1 }, { "pitch": "D5", "x": 634, "duration": 1 }, { "pitch": "G5", "x": 634, "duration": 1 }, { "pitch": "A5", "x": 634, "duration": 1 }, { "pitch": "G1", "x": 634, "duration": 1 }, { "pitch": "G2", "x": 634, "duration": 1 }, { "pitch": "D5", "x": 635, "duration": 1 }, { "pitch": "G5", "x": 635, "duration": 1 }, { "pitch": "A5", "x": 635, "duration": 1 }, { "pitch": "G2", "x": 635, "duration": 1 }, { "pitch": "A4", "x": 635, "duration": 1 }, { "pitch": "G1", "x": 635, "duration": 1 }, { "pitch": "G2", "x": 636, "duration": 1 }, { "pitch": "D3", "x": 636, "duration": 1 }, { "pitch": "G3", "x": 636, "duration": 1 }, { "pitch": "G4", "x": 636, "duration": 2 }, { "pitch": "Bb4", "x": 636, "duration": 2 }, { "pitch": "D5", "x": 636, "duration": 2 }, { "pitch": "G5", "x": 636, "duration": 2 }, { "pitch": "G3", "x": 637, "duration": 1 }, { "pitch": "G2", "x": 637, "duration": 1 }, { "pitch": "D3", "x": 637, "duration": 1 }, { "pitch": "Bb4", "x": 638, "duration": 1 }, { "pitch": "Bb5", "x": 638, "duration": 1 }, { "pitch": "Bb4", "x": 639, "duration": 1 }, { "pitch": "Bb5", "x": 639, "duration": 1 }, { "pitch": "D#5", "x": 640, "duration": 1 }, { "pitch": "G5", "x": 640, "duration": 1 }, { "pitch": "Bb5", "x": 640, "duration": 1 }, { "pitch": "D#1", "x": 640, "duration": 1 }, { "pitch": "D#2", "x": 640, "duration": 1 }, { "pitch": "Bb4", "x": 640, "duration": 1 }, { "pitch": "A4", "x": 641, "duration": 1 }, { "pitch": "D#5", "x": 641, "duration": 1 }, { "pitch": "G5", "x": 641, "duration": 1 }, { "pitch": "A5", "x": 641, "duration": 1 }, { "pitch": "D#1", "x": 641, "duration": 1 }, { "pitch": "D#2", "x": 641, "duration": 1 }, { "pitch": "A4", "x": 642, "duration": 1 }, { "pitch": "D#5", "x": 642, "duration": 1 }, { "pitch": "G5", "x": 642, "duration": 1 }, { "pitch": "A5", "x": 642, "duration": 1 }, { "pitch": "D#1", "x": 642, "duration": 1 }, { "pitch": "D#2", "x": 642, "duration": 1 }, { "pitch": "D#5", "x": 643, "duration": 1 }, { "pitch": "G5", "x": 643, "duration": 1 }, { "pitch": "A5", "x": 643, "duration": 1 }, { "pitch": "D#2", "x": 643, "duration": 1 }, { "pitch": "A4", "x": 643, "duration": 1 }, { "pitch": "D#1", "x": 643, "duration": 1 }, { "pitch": "D#2", "x": 644, "duration": 1 }, { "pitch": "Bb2", "x": 644, "duration": 1 }, { "pitch": "D#3", "x": 644, "duration": 1 }, { "pitch": "Bb4", "x": 644, "duration": 2 }, { "pitch": "G4", "x": 644, "duration": 2 }, { "pitch": "D#5", "x": 644, "duration": 2 }, { "pitch": "G5", "x": 644, "duration": 2 }, { "pitch": "D#3", "x": 645, "duration": 1 }, { "pitch": "D#2", "x": 645, "duration": 1 }, { "pitch": "Bb2", "x": 645, "duration": 1 }, { "pitch": "G4", "x": 646, "duration": 1 }, { "pitch": "G5", "x": 646, "duration": 1 }, { "pitch": "G4", "x": 647, "duration": 1 }, { "pitch": "G5", "x": 647, "duration": 1 }, { "pitch": "G4", "x": 648, "duration": 1 }, { "pitch": "D5", "x": 648, "duration": 1 }, { "pitch": "G5", "x": 648, "duration": 1 }, { "pitch": "D1", "x": 648, "duration": 1 }, { "pitch": "D2", "x": 648, "duration": 1 }, { "pitch": "A4", "x": 649, "duration": 1 }, { "pitch": "D5", "x": 649, "duration": 1 }, { "pitch": "A5", "x": 649, "duration": 1 }, { "pitch": "D1", "x": 649, "duration": 1 }, { "pitch": "D2", "x": 649, "duration": 1 }, { "pitch": "A4", "x": 650, "duration": 1 }, { "pitch": "D5", "x": 650, "duration": 1 }, { "pitch": "A5", "x": 650, "duration": 1 }, { "pitch": "D1", "x": 650, "duration": 1 }, { "pitch": "D2", "x": 650, "duration": 1 }, { "pitch": "A4", "x": 651, "duration": 1 }, { "pitch": "D5", "x": 651, "duration": 1 }, { "pitch": "A5", "x": 651, "duration": 1 }, { "pitch": "D2", "x": 651, "duration": 1 }, { "pitch": "D1", "x": 651, "duration": 1 }, { "pitch": "A4", "x": 652, "duration": 1 }, { "pitch": "D5", "x": 652, "duration": 1 }, { "pitch": "F#5", "x": 652, "duration": 1 }, { "pitch": "A5", "x": 652, "duration": 1 }, { "pitch": "D2", "x": 652, "duration": 1 }, { "pitch": "A2", "x": 652, "duration": 1 }, { "pitch": "D3", "x": 652, "duration": 1 }, { "pitch": "Bb4", "x": 653, "duration": 1 }, { "pitch": "D5", "x": 653, "duration": 1 }, { "pitch": "F#5", "x": 653, "duration": 1 }, { "pitch": "Bb5", "x": 653, "duration": 1 }, { "pitch": "D3", "x": 653, "duration": 1 }, { "pitch": "D2", "x": 653, "duration": 1 }, { "pitch": "A2", "x": 653, "duration": 1 }, { "pitch": "Bb4", "x": 654, "duration": 1 }, { "pitch": "D5", "x": 654, "duration": 1 }, { "pitch": "F#5", "x": 654, "duration": 1 }, { "pitch": "Bb5", "x": 654, "duration": 1 }, { "pitch": "D5", "x": 655, "duration": 1 }, { "pitch": "Bb4", "x": 655, "duration": 1 }, { "pitch": "F#5", "x": 655, "duration": 1 }, { "pitch": "Bb5", "x": 655, "duration": 1 }, { "pitch": "Bb4", "x": 656, "duration": 2 }, { "pitch": "G2", "x": 656, "duration": 16 }, { "pitch": "G3", "x": 656, "duration": 16 }, { "pitch": "A4", "x": 658, "duration": 2 }, { "pitch": "G4", "x": 660, "duration": 2 }, { "pitch": "D4", "x": 662, "duration": 2 }, { "pitch": "Bb4", "x": 664, "duration": 2 }, { "pitch": "A4", "x": 666, "duration": 2 }, { "pitch": "G4", "x": 668, "duration": 2 }, { "pitch": "D4", "x": 670, "duration": 2 }, { "pitch": "Bb4", "x": 672, "duration": 2 }, { "pitch": "D#2", "x": 672, "duration": 8 }, { "pitch": "D#3", "x": 672, "duration": 8 }, { "pitch": "A4", "x": 674, "duration": 2 }, { "pitch": "G4", "x": 676, "duration": 2 }, { "pitch": "D4", "x": 678, "duration": 2 }, { "pitch": "C5", "x": 680, "duration": 2 }, { "pitch": "D2", "x": 680, "duration": 8 }, { "pitch": "D3", "x": 680, "duration": 8 }, { "pitch": "Bb4", "x": 682, "duration": 2 }, { "pitch": "A4", "x": 684, "duration": 2 }, { "pitch": "Bb4", "x": 686, "duration": 2 }, { "pitch": "Bb4", "x": 688, "duration": 2 }, { "pitch": "G2", "x": 688, "duration": 16 }, { "pitch": "G3", "x": 688, "duration": 16 }, { "pitch": "A4", "x": 690, "duration": 2 }, { "pitch": "G4", "x": 692, "duration": 2 }, { "pitch": "D4", "x": 694, "duration": 2 }, { "pitch": "Bb4", "x": 696, "duration": 2 }, { "pitch": "A4", "x": 698, "duration": 2 }, { "pitch": "G4", "x": 700, "duration": 2 }, { "pitch": "D4", "x": 702, "duration": 2 }, { "pitch": "Bb4", "x": 704, "duration": 2 }, { "pitch": "D#2", "x": 704, "duration": 8 }, { "pitch": "D#3", "x": 704, "duration": 8 }, { "pitch": "A4", "x": 706, "duration": 2 }, { "pitch": "G4", "x": 708, "duration": 2 }, { "pitch": "D4", "x": 710, "duration": 2 }, { "pitch": "C5", "x": 712, "duration": 2 }, { "pitch": "D2", "x": 712, "duration": 8 }, { "pitch": "D3", "x": 712, "duration": 8 }, { "pitch": "Bb4", "x": 714, "duration": 2 }, { "pitch": "A4", "x": 716, "duration": 2 }, { "pitch": "Bb4", "x": 718, "duration": 2 }, { "pitch": "G4", "x": 720, "duration": 16 }, { "pitch": "G1", "x": 720, "duration": 16 }, { "pitch": "G2", "x": 720, "duration": 16 }]
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
    function playPreviewNote(pitch, instrument) {
        instrument.wad.play({
            pitch: pitch,
            env: { hold: 0.1 }
        });
    }
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
        var activeSongId = _a.activeSongId, song = _a.song, updateSong = _a.updateSong;
        var X_OFFSET = 60;
        var Y_OFFSET = 7;
        var ROW_HEIGHT = 15;
        var ROW_WIDTH = 15;
        var Y_FIX = ROW_HEIGHT; // magic offset # to handle rounding errors when determining which cell is hovered
        var PADDING = 2;
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
            var paint = function (event) {
                var newX = event.offsetX - canvas.offsetLeft;
                var newY = event.offsetY - canvas.offsetTop;
                var xCoord = Math.round(newX / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
                var yCoord = Math.round(newY / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);
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
                        if (song.instrumentId in defaults) {
                            playPreviewNote(pitch_1, defaults[song.instrumentId]);
                        }
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
                var xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
                var yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);
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
                        if (song.instrumentId in defaults) {
                            playPreviewNote(pitch_2, defaults[song.instrumentId]);
                        }
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
        }, [activeSongId]);
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
        var songs = _a.songs, activeSong = _a.activeSong, setActiveSongId = _a.setActiveSongId;
        return React.createElement(React.Fragment, null,
            React.createElement("aside", { className: "Sidebar" },
                React.createElement("div", { className: "Sidebar-heading" }, "Songs"),
                React.createElement("div", { className: "pad20" }, Object.keys(songs).map(function (songId) { return (React.createElement("a", { className: activeSong.id === songId ? 'active' : '', href: "#", key: songId, onClick: function (event) {
                        event.preventDefault();
                        setActiveSongId(songId);
                    } }, songs[songId].title || 'Untitled')); }))));
    };

    function App() {
        var _this = this;
        var _a = React.useState({
            'New Song': defaults$1['New Song'],
            'Carol': defaults$1['Carol']
        }), songs = _a[0], setSongs = _a[1];
        var _b = React.useState('New Song'), activeSongId = _b[0], setActiveSongId = _b[1];
        var updateSong = function (song) {
            var _a;
            setSongs(Object.assign({}, songs, (_a = {}, _a[song.id] = song, _a)));
        };
        var togglePlay = function () { return __awaiter(_this, void 0, void 0, function () {
            var activeSong, activeInstrument, beatLength, _i, _a, note;
            return __generator(this, function (_b) {
                activeSong = songs[activeSongId];
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
                React.createElement(Header, { song: songs[activeSongId], updateSong: updateSong, instruments: [
                        defaults['Flute'],
                        defaults['Piano'],
                        defaults['Synth Lead']
                    ] }),
                React.createElement(Sidebar, { songs: songs, activeSong: songs[activeSongId], setActiveSongId: setActiveSongId }),
                React.createElement(Editor, { activeSongId: activeSongId, song: songs[activeSongId], updateSong: updateSong }),
                React.createElement(Controls, { song: songs[activeSongId], updateSong: updateSong, togglePlay: togglePlay })));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

}());
