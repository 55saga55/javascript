class MoodRenderer {
    init(params) {

        console.log(params);
      this.eGui = document.createElement('span');
      
        this.eGui.innerHTML = `<img width="20px" src="${params.value}" />`;
      }
    
  
    getGui() {
      return this.eGui;
    }
  
    refresh(params) {
      return false;
    }
  }