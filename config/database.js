module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        // 数据库所在的数据地址，后端服务和数据库服务是一个服务器，就是localhost，如果不是一个服务器，这里需要修改
        host: env('DATABASE_HOST', 'localhost'),
        // 数据库默认端口号，默认是3306
        port: env.int('DATABASE_PORT', 3306),
        // 数据库名称
        database: env('DATABASE_NAME', 'blog'),
        // 访问权限账户
        username: env('DATABASE_USERNAME', 'csf'),
        // 账户密码
        password: env('DATABASE_PASSWORD', 'Gudan1beizi.+.'),
      },
      options: {},
    },
  },
});
