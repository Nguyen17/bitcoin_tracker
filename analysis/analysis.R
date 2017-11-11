stats <- read.csv(file.choose())
names(stats)<-c("Date","price")

price <- stats$price
Date <- stats$Date



head(stats)

stats$Date <- as.Date( stats$Date, '%m/%d/%Y')
ggplot(aes(x = Date, y = price), data = stats) + geom_point()

lm(price ~ Date)
abline(lm(price ~ Date))
