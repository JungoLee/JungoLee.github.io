class condition {
  constructor($param) {
    this.update($param);
  }

  getMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  getTablet() {
    return /iPad|Tablet/i.test(navigator.userAgent);
  }

  getDesktop() {
    return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  getIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  getAndroid() {
    return /Android/.test(navigator.userAgent);
  }

  getChrome() {
    return (
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    );
  }

  getFirefox() {
    return /Firefox/.test(navigator.userAgent);
  }

  getEdge() {
    return /Edge/.test(navigator.userAgent);
  }

  getSafari() {
    return (
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor)
    );
  }

  getWindows() {
    return /Win/.test(navigator.platform);
  }

  getMac() {
    return /Mac/.test(navigator.platform);
  }

  update() {
    this.isMobile = this.getMobile();
    this.isTablet = this.getTablet();
    this.isDesktop = this.getDesktop();
    this.isIOS = this.getIOS();
    this.isAndroid = this.getAndroid();
    this.isChrome = this.getChrome();
    this.isFirefox = this.getFirefox();
    this.isEdge = this.getEdge();
    this.isSafari = this.getSafari();
    this.isWindows = this.getWindows();
    this.isMac = this.getMac();
  }
}

export default condition;
