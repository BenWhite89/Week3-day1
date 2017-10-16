var library = (function() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var monthAbbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let date = new Date();

	function doubleDigit(value) {
		if (value.length === 2 || value > 10) {
			return value.toString();
		} else {
			return "0"+value;
		}
    }

	function getOrdinal(value) {
		if (value[1] == 1) {
			return value+"st";
		} else if (value[1] == 2) {
			return value+"nd";
		} else if (value[1] == 3) {
			return value+"rd";
		} else {
			return value+"th";
		}
	}

    return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			return Math.floor(date/1000).toString();
		},
		UnixMillisecond: function(){
			return Date.now();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				var h = library.Hour.TwelveHour(),
					m = library.Minute.DblDigit(),
					s = library.Second.DblDigit(),
					ap = library.Hour.AMPM.UpperCase(),
					t = `${h}:${m}:${s} ${ap}`;

				return  t;
			  },
	   	    WithOutSeconds: function() {
				var h = library.Hour.TwelveHour(),
				m = library.Minute.DblDigit(),
				ap = library.Hour.AMPM.UpperCase(),
				t = `${h}:${m} ${ap}`;

				return t
			}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				var m = library.Month.MonthNumberDblDigit(),
					d = library.Month.DateOfMonth.DateDblDigit(),
					y = library.Year.YearFull(),
					mdy = `${m}/${d}/${y}`;

				return mdy;
			},
			Name: function(){
				var m = library.Month.CurrentMonth(),
					d = library.Month.DateOfMonth.DateDblDigit(),
					y = library.Year.YearFull(),
					mdy = `${m} ${d}, ${y}`;

				return mdy;
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				return date.getSeconds().toString();
			},
			DblDigit: function(){
				return doubleDigit(library.Second.Second());
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				return date.getMinutes().toString();
			},
			DblDigit: function(){
				return doubleDigit(library.Minute.Minute());
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return (date.getHours()).toString();
			},
			TwelveHour: function() {
				if (date.getHours() > 12) {
					return (date.getHours() - 12).toString();
				} else {
					return library.Hour.TwentyFourHour();
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						if (date.getHours() > 11) {
							return "PM";
						} else {
							return "AM";
						}
					},
					LowerCase: function(){
						return library.Hour.AMPM.UpperCase().toLowerCase();
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				return days[date.getDay()];
			},
			AbrDayOfWeek: function(){
				return library.Week.DayOfWeek().substring(0, 3);
			},
			FirstTwoOfWeek: function(){
				return library.Week.DayOfWeek().substring(0, 2)
			},
			WeekOfYear: function(){
				var start = new Date(date.getFullYear(), 0, 0);
				var diff = date - start;
				var oneDay = 1000 * 60 * 60 * 24;
				var day = Math.floor(diff / oneDay);
				var week = Math.ceil(day/7).toString();
				
				return week;
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						return date.getDate().toString();
					},
					Ordinal: function(){
						return getOrdinal(library.Month.DateOfMonth.Numeral());
					},
					DateDblDigit: function(){
						return doubleDigit(library.Month.DateOfMonth.Numeral());
					}
				}
			})(),
			MonthNumber: function(){
				return (date.getMonth()+1).toString();
			},
			MonthNumberDblDigit: function(){
				return doubleDigit(library.Month.MonthNumber());
			},
			AbrOfCurrentMonth: function(){
				return monthAbbrevs[date.getMonth()];
			},
			CurrentMonth: function(){
				return months[date.getMonth()];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var start = new Date(date.getFullYear(), 0, 0);
						var diff = date - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay).toString();
						
						return day;
					},
					Ordinal: function(){
						var start = new Date(date.getFullYear(), 0, 0);
						var diff = date - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay).toString();

						return getOrdinal(day);
					}
				}
			})(),
			YearFull: function(){
				return date.getFullYear().toString();
			},
			YearAbr: function(){
				var yr = date.getFullYear().toString();

				return yr[2]+yr[3];
			}
		}
	})(),
	Defaults: function(){
		var y = library.Year.YearFull(),
			mo = library.Month.MonthNumberDblDigit(),
			d = library.Month.DateOfMonth.DateDblDigit(),
			h = library.Hour.TwentyFourHour(),
			m = library.Minute.DblDigit(),
			s = library.Second.DblDigit(),
			def = `${y}-${mo}-${d}T${h}:${m}:${s}`;

			return  def;

	}
  }
})();