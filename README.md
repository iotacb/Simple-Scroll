# Simple-Scroll

A simple JavaScript script to add and remove or to modify styling of an element based on the scrolling position

## Installation

With NPM
```bash
npm i simple-scroll.js
```

Without NPM
```bash
<script src="https://cdn.jsdelivr.net/gh/iotacb/simple-scroll/src/simple-scroll-min.js"></script>
```

## Usage

Just add the 'ss-target' attribute to the element you want to be animated.

```html
<body>
    <section>
        <h1 ss-target>This is simple-scroll!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati.</p>
    </section>
</body>
```

## Attributes
There are some settings to do some more advanced animations.
| Attribute           | Description                                                                     |
|---------------------|---------------------------------------------------------------------------------|
|`ss-target`          | Tells the script that this element should be animated                           |
|`ss-delay`           | Delay before css class changes                                                  |
|`ss-in`              | The css class the element receives when it gets inside the "viewport"           |
|`ss-out`             | The css class the element receives when it gets outside the "viewport"          |
|`ss-object`          | Change the "viewport" object which triggers the class changes                   |
|`ss-scroll-position` | Use the scroll position instead of the "viewport" to trigger class changes      |
|`ss-scroll-anim`     | Animate a css property based on the scroll position                             |

| Attribute           | Usage / Values                                                                  |
|---------------|---------------------------------------------------------------------------------------|
|`ss-target`    | <h1 ``ss-target``></h1>                                                               |
|`ss-delay`     | ss-delay="**Number**"                                                                 |
|`ss-in`        | ss-in="**ss-fade-in**"                                                                |
|`ss-out`       | ss-out="**ss-fade-out**"                                                              |
|`ss-object`    | ss-object="**.container**"                                                            |
|`ss-scroll-position` | ss-scroll-position="**700**"                                                    |
|`ss-scroll-anim` | ss-scroll-anim="**opacity, 0 0, 400 1**" |
## License
[MIT](https://github.com/iotacb/Simple-Scroll/blob/main/LICENSE)
