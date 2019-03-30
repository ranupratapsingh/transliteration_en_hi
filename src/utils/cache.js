let cache;

class CacheManager {
    constructor() {
      cache = localStorage.getItem('cache');
        if(!!cache){
            this.cache = JSON.parse(cache)
        } else {
            this.cache = {};
        }
    }
    set(key, val){
        this.cache[key] = val;
        localStorage.setItem('cache', JSON.stringify(this.cache));
    }
    get(key){
        return this.cache[key];
    }
}

cache = new CacheManager();

export default cache;
