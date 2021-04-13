(function () {
  'use strict';

  var __assign = (window && window.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __awaiter = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (window && window.__generator) || function (thisArg, body) {
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
  };
  // 512 x 512 viewbox
  var icons = {
      decrement: 'M396.365 193.613c-10.419 10.701-120.192 115.251-120.192 115.251-5.581 5.709-12.877 8.576-20.173 8.576-7.322 0-14.618-2.867-20.173-8.576 0 0-109.773-104.551-120.218-115.251-10.419-10.701-11.136-29.952 0-41.37 11.162-11.392 26.701-12.313 40.345 0l100.045 95.923 100.019-95.923c13.671-12.313 29.235-11.392 40.346 0 11.161 11.443 10.471 30.695 0 41.37z',
      increment: 'M396.365 267.187c-10.419-10.701-120.192-115.277-120.192-115.277-5.581-5.709-12.877-8.55-20.173-8.55-7.322 0-14.618 2.841-20.173 8.55 0 0-109.773 104.576-120.218 115.277-10.419 10.701-11.136 29.926 0 41.37 11.162 11.417 26.701 12.313 40.345 0l100.045-95.949 100.019 95.923c13.671 12.314 29.235 11.418 40.346 0 11.161-11.417 10.471-30.669 0-41.344z',
  };
  var Icon = function (_a) {
      var name = _a.name;
      // TODO: specify fill in css from parent, allowing :hover to change to blue
      return React.createElement(React.Fragment, null,
          React.createElement("svg", { viewBox: "0 0 512 512", height: "12", className: "Icon", fill: "#8699b5" },
              React.createElement("path", { d: icons[name] })));
  };
  var Tempo = function (_a) {
      var bpm = _a.bpm, updateBpm = _a.updateBpm;
      return React.createElement(React.Fragment, null,
          React.createElement("input", { className: "Tempo-input", type: "number", maxLength: 3, value: bpm.toString(), onInput: function (event) {
                  updateBpm(event.target.valueAsNumber);
              } }),
          React.createElement("span", { className: "Tempo-label" }, "bpm"),
          React.createElement("div", { className: "Tempo-controls" },
              React.createElement("button", { onClick: function () { return updateBpm(bpm + 1); } },
                  React.createElement(Icon, { name: "increment" })),
              React.createElement("button", { onClick: function () { return updateBpm(bpm - 1); } },
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
                  React.createElement("select", { value: song.instrumentId, onChange: function (event) {
                          for (var _i = 0, instruments_1 = instruments; _i < instruments_1.length; _i++) {
                              var instrument = instruments_1[_i];
                              instrument.wad.stop();
                              if (instrument.id === event.target.value) {
                                  instrument.wad.play();
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
  function Editor() {
      return React.createElement(React.Fragment, null,
          React.createElement("div", { className: "Editor" }, "Editor area"));
  }
  // function generateLoopWad() {
  //   for ( var i = 0; i < currentLoopPlay.notes.length; i++ ) {
  //     var wadInstance = 'wad' + i;
  //     var thisLoopInstrument = _.findWhere(instrumentInstances, {name: currentLoopPlay.instrument})
  //     var thisLoopInstrumentCode = thisLoopInstrument.code;
  //     thisLoopInstrumentCode.pitch = currentLoopPlay.notes[i].pitch;
  //     window[wadLoop][wadInstance] = new Wad(thisLoopInstrumentCode)
  //     // console.log(currentLoopPlay.notes)
  //     // thisLoopInstrumentCode.filter = thisLoopInstrumentCode.filter[0]
  //     // var wadInstance = 'wad' + instrumentInstances[i].id
  //     // console.log(instrumentInstances[i].code, wadInstance)
  //     // window[wadInstance] = new Wad(instrumentInstances[i].code)
  //   }
  //   var loopingLength = currentLoopPlay.notes.length
  //   var beatLen = 15/BPM;
  //   var xCoord, holdLen, waitLen;
  //   for ( var j = 0; j < loopingLength; j++ ) {
  //     var wadInstance = 'wad' + j;
  //     thisLoop = currentLoopPlay.notes[j];
  //     xCoord  = thisLoop.coords[0];
  //     holdLen = thisLoop.duration * beatLen
  //     waitLen = beatLen*xCoord
  //     window[wadLoop][wadInstance].play({ env: { hold: holdLen }, wait: waitLen});
  //   }
  // }
  var Controls = function (_a) {
      _a.song; var isPlaying = _a.isPlaying, togglePlay = _a.togglePlay;
      return React.createElement(React.Fragment, null,
          React.createElement("div", { className: "Controls" },
              React.createElement("button", { className: "Control-play", onClick: togglePlay }, isPlaying ? React.createElement("i", { className: "material-icons" }, "stop") : React.createElement("i", { className: "material-icons" }, "play_arrow")),
              React.createElement("button", null, "Clear"),
              React.createElement("button", null, "Save")));
  };
  var instruments = {
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
  var defaultSongs = {
      'Twinkle': {
          id: 'Twinkle',
          title: 'Twinkle Twinkle Little Star',
          bpm: 80,
          // length: 48,
          instrumentId: 'Piano',
          notes: [{ "coords": [5, 22], "duration": 1, "pitch": "A4" }, { "coords": [6, 22], "duration": 1, "pitch": "A4" }, { "coords": [37, 22], "duration": 1, "pitch": "A4" }, { "coords": [38, 22], "duration": 1, "pitch": "A4" }, { "coords": [3, 23], "duration": 1, "pitch": "G4" }, { "coords": [4, 23], "duration": 1, "pitch": "G4" }, { "coords": [7, 23], "duration": 2, "pitch": "G4" }, { "coords": [17, 23], "duration": 1, "pitch": "G4" }, { "coords": [18, 23], "duration": 1, "pitch": "G4" }, { "coords": [25, 23], "duration": 1, "pitch": "G4" }, { "coords": [26, 23], "duration": 1, "pitch": "G4" }, { "coords": [35, 23], "duration": 1, "pitch": "G4" }, { "coords": [36, 23], "duration": 1, "pitch": "G4" }, { "coords": [39, 23], "duration": 2, "pitch": "G4" }, { "coords": [9, 24], "duration": 1, "pitch": "F4" }, { "coords": [10, 24], "duration": 1, "pitch": "F4" }, { "coords": [19, 24], "duration": 1, "pitch": "F4" }, { "coords": [20, 24], "duration": 1, "pitch": "F4" }, { "coords": [27, 24], "duration": 1, "pitch": "F4" }, { "coords": [28, 24], "duration": 1, "pitch": "F4" }, { "coords": [41, 24], "duration": 1, "pitch": "F4" }, { "coords": [42, 24], "duration": 1, "pitch": "F4" }, { "coords": [11, 25], "duration": 1, "pitch": "E4" }, { "coords": [12, 25], "duration": 1, "pitch": "E4" }, { "coords": [21, 25], "duration": 1, "pitch": "E4" }, { "coords": [22, 25], "duration": 1, "pitch": "E4" }, { "coords": [29, 25], "duration": 1, "pitch": "E4" }, { "coords": [30, 25], "duration": 1, "pitch": "E4" }, { "coords": [43, 25], "duration": 1, "pitch": "E4" }, { "coords": [44, 25], "duration": 1, "pitch": "E4" }, { "coords": [13, 26], "duration": 1, "pitch": "D4" }, { "coords": [14, 26], "duration": 1, "pitch": "D4" }, { "coords": [23, 26], "duration": 2, "pitch": "D4" }, { "coords": [31, 26], "duration": 2, "pitch": "D4" }, { "coords": [45, 26], "duration": 1, "pitch": "D4" }, { "coords": [46, 26], "duration": 1, "pitch": "D4" }, { "coords": [1, 27], "duration": 1, "pitch": "C4" }, { "coords": [2, 27], "duration": 1, "pitch": "C4" }, { "coords": [15, 27], "duration": 2, "pitch": "C4" }, { "coords": [33, 27], "duration": 1, "pitch": "C4" }, { "coords": [34, 27], "duration": 1, "pitch": "C4" }, { "coords": [47, 27], "duration": 2, "pitch": "C4" }]
      },
      'Mario': {
          id: 'Mario',
          title: 'Theme from Super Mario',
          bpm: 120,
          // length: 50,
          instrumentId: 'Synth Lead',
          notes: [{ "coords": [9, 28], "duration": 1, "pitch": "G5" }, { "coords": [1, 31], "duration": 1, "pitch": "E5" }, { "coords": [2, 31], "duration": 1, "pitch": "E5" }, { "coords": [4, 31], "duration": 1, "pitch": "E5" }, { "coords": [7, 31], "duration": 1, "pitch": "E5" }, { "coords": [6, 35], "duration": 1, "pitch": "C5" }, { "coords": [17, 35], "duration": 1, "pitch": "C5" }, { "coords": [9, 36], "duration": 1, "pitch": "B4" }, { "coords": [28, 36], "duration": 1, "pitch": "B4" }, { "coords": [30, 37], "duration": 1, "pitch": "Bb4" }, { "coords": [26, 38], "duration": 1, "pitch": "A4" }, { "coords": [31, 38], "duration": 1, "pitch": "A4" }, { "coords": [9, 40], "duration": 1, "pitch": "G4" }, { "coords": [13, 40], "duration": 1, "pitch": "G4" }, { "coords": [20, 40], "duration": 1, "pitch": "G4" }, { "coords": [33, 40], "duration": 2, "pitch": "G4" }, { "coords": [1, 41], "duration": 1, "pitch": "F#4" }, { "coords": [2, 41], "duration": 1, "pitch": "F#4" }, { "coords": [4, 41], "duration": 1, "pitch": "F#4" }, { "coords": [6, 41], "duration": 1, "pitch": "F#4" }, { "coords": [7, 41], "duration": 1, "pitch": "F#4" }, { "coords": [17, 43], "duration": 1, "pitch": "E4" }, { "coords": [23, 43], "duration": 1, "pitch": "E4" }, { "coords": [28, 45], "duration": 1, "pitch": "D4" }, { "coords": [30, 46], "duration": 1, "pitch": "C#4" }, { "coords": [20, 47], "duration": 1, "pitch": "C4" }, { "coords": [26, 47], "duration": 1, "pitch": "C4" }, { "coords": [31, 47], "duration": 1, "pitch": "C4" }, { "coords": [33, 47], "duration": 2, "pitch": "C4" }, { "coords": [13, 52], "duration": 1, "pitch": "G3" }, { "coords": [17, 52], "duration": 1, "pitch": "G3" }, { "coords": [23, 52], "duration": 1, "pitch": "G3" }, { "coords": [28, 52], "duration": 1, "pitch": "G3" }, { "coords": [30, 53], "duration": 1, "pitch": "F#3" }, { "coords": [26, 54], "duration": 1, "pitch": "F3" }, { "coords": [31, 54], "duration": 1, "pitch": "F3" }, { "coords": [20, 55], "duration": 1, "pitch": "E3" }, { "coords": [33, 55], "duration": 2, "pitch": "E3" }, { "coords": [1, 57], "duration": 1, "pitch": "D3" }, { "coords": [2, 57], "duration": 1, "pitch": "D3" }, { "coords": [4, 57], "duration": 1, "pitch": "D3" }, { "coords": [6, 57], "duration": 1, "pitch": "D3" }, { "coords": [7, 57], "duration": 1, "pitch": "D3" }, { "coords": [23, 58], "duration": 1, "pitch": "C#3" }]
      }
  };
  var songs = [defaultSongs['Twinkle'], defaultSongs['Mario']];
  function App() {
      var _this = this;
      var _a = React.useState(songs[0]), activeSong = _a[0], setActiveSong = _a[1];
      var _b = React.useState(false), isPlaying = _b[0], setPlaying = _b[1];
      var updateSong = function (song) {
          var priorSongIndex = songs.findIndex(function (x) { return x.id === song.id; });
          var priorSong = songs[priorSongIndex];
          if (!priorSong)
              return;
          songs.splice(priorSongIndex, 1, song);
          setActiveSong(song);
      };
      var togglePlay = function () { return __awaiter(_this, void 0, void 0, function () {
          var instrument, beatLength, _i, _a, note;
          return __generator(this, function (_b) {
              instrument = instruments[activeSong.instrumentId];
              if (isPlaying) {
                  setPlaying(false);
                  instrument.wad.stop();
              }
              else {
                  setPlaying(true);
                  beatLength = (60 / 4) / activeSong.bpm;
                  for (_i = 0, _a = activeSong.notes; _i < _a.length; _i++) {
                      note = _a[_i];
                      instrument.wad.play({
                          pitch: note.pitch,
                          wait: beatLength * note.coords[0],
                          env: { hold: note.duration * beatLength }
                      });
                  }
              }
              return [2 /*return*/];
          });
      }); };
      return React.createElement(React.Fragment, null,
          React.createElement("div", { className: "App" },
              React.createElement(Header, { song: activeSong, updateSong: updateSong, instruments: [
                      instruments['Flute'],
                      instruments['Piano'],
                      instruments['Synth Lead']
                  ] }),
              React.createElement(Sidebar, { songs: songs, activeSong: activeSong, setActiveSong: setActiveSong }),
              React.createElement(Editor, null),
              React.createElement(Controls, { song: activeSong, isPlaying: isPlaying, togglePlay: togglePlay })));
  }
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

}());
