function generateBusinessName() {
    const adjective = Math.random() < 0.33 ? "Crazy" : Math.random() < 0.5 ? "Amazing" : "Fire";
    const shopName = Math.random() < 0.33 ? "Engine" : Math.random() < 0.5 ? "Foods" : "Garments";
    const otherWord = Math.random() < 0.33 ? "Bros" : Math.random() < 0.5 ? "Limited" : "Hub";
  
    return `${adjective} ${shopName} ${otherWord}`;
  }
  
  console.log(generateBusinessName());
  