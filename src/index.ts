import { handleRequest } from './handler'

declare global {
  const DOCKER_MIRROR_CACHE: KVNamespace
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
