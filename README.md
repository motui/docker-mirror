# docker-mirror

Docker Mirror 是运行于 cloudflare workers 上的 Docker 镜像加速工具

## fork & clone

## init

```shell
npm install
```

## 初始化wrangler

```shell
wrangler whoami
```

按照提示绑定账号和查看account_id（Cloudflare Workers Dashboard 右侧也可以查看）

## 创建KV

```shell
wrangler kv:namespace create {kv name}
# eg.
wrangler kv:namespace create docker_mirror_cache

# 根据返回信息找到ID，配置在wrangler.toml中
[[kv_namespaces]]
binding = "DOCKER_MIRROR_CACHE"
id = "XXXXXXXXXXX"
```

binding = `DOCKER_MIRROR_CACHE`将作为参数绑定在worker上

> binding = DOCKER_MIRROR_CACHE和index.ts中的“DOCKER_MIRROR_CACHE”保持一直，如需求改同步修改

## 部署

```shell
wrangler deploy
```

自动创建worker并绑定参数。注意：由于没有UI界面所以cloudflare调试页面显示404

## 绑定自定义域名

> 建议绑定自定义域名，默认域名可能无法正常访问

在worker设置下的触发器中配置域名即可，证书会自动绑定

## 验证

```shell
docker pull {worker域名}/mariadb
```

## 其他

可以直接使用`wrangler`初始化项目和后续操作，将src中文件和wrangler.toml文件copy到对应目录即可

## 感谢

核心代码来自[hammal](https://github.com/ImSingee/hammal)