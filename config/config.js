const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "b8tWuBoFs1QXbU7ao2k/j8tq0d4YnoZLd1nS7IKfdWgsjD3CDQGh8j13ykHDPM54WSocSggO68CV8hHumtlspg==",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config
