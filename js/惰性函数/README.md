## JavaScript惰性函数

### 概述

>  惰性函数表示函数执行的分支只会在函数第一次调用的时候执行，他的应用情景在于当我们遇到一个需要判断场景去调用不同的方法时，避免重复进入函数内的if判断，也就是说if判断只进行一次，之后函数就会被分支里的代码替换掉


优化对于被频繁使用的函数

在第一次调用时，执行对应的判断逻辑分支，指定环境后重新赋值，则在之后的调用中，没有分支判断的逻辑了，优化了逻辑处理过程

JS惰性函数，是针对优化频繁使用的函数。常用于函数库的编写、单例模式之中。


https://www.cnblogs.com/maoxiaodun/p/10125081.html