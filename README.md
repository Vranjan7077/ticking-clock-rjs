## `Date CheatSheet`

```
const today = new Date()   
today					// 2020-08-09T01:40:51.017Z
today.getDate()			// 9
today.getDay()			// 0 Sunday
today.getMonth()		// 7 (0 is jan)
today.getFullYear()		// 2020
today.getYear()			// 120 ?
today.getHours()		// 11
today.getMinutes()		// 40
today.getSeconds()		// 51
today.getMilliseconds()	// 24
today.getMilliseconds()	  // 24
today.getTime()			// 1596937251025
today.getTimezoneOffset()	// -600
```

```
today.getUTCDate()			// 9
today.getUTCDay()			// 8
today.getUTCMonth()			// 7
today.getUTCFullYear()		// 2020
today.getUTCHours()			// 1
today.getUTCMinutes()		// 40
today.getUTCSeconds()		// 51
today.getUTCMilliseconds()	// 31
```

```
today.setDate(5)
today.setMonth(5)
today.setFullYear(2021)
today.setYear(100)
today.setHours(12)
today.setMinutes(5)
today.setSeconds(8)
today.setMilliseconds(45)
today.setTime(34)
today.setUTCDate(11)
today.setUTCMonth(5)
today.setUTCFullYear(2021)
today.setUTCHours(5)
today.setUTCMinutes(10)
today.setUTCSeconds(24)
today.setUTCMilliseconds(22)
```

```
const today = new Date()
today.toString()      	// 'Sun Aug 09 2020 15:43:30 GMT+1000 (Australain Eastern Standard Time)'

today.toLocaleString() 	//'09/08/2020,  15:43:30'

today.toGMTString()		//'Sun,09 Aug 2020 06:44:30 GMT'

today.toUTCString()		//'Sun,09 Aug 2020 06:44:30 GMT'
```
