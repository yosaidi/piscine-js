const slice = (element , start , end = element.length ) => {
    const type = typeOfElement(element);
    if (type === null) return null; 

    [start, end] = startendFinder(start,end, element.length);

    let result;

    switch (type){
        case "string":
            result = "";
         for (let i = start ; i < end ; i++){
            result +=element[i];
         }; 
            break;
        case "array" :
            result = []; 
         for (let i = start ; i < end ; i++){
                result.push(element[i]);
         }; 
            break;  
        default:
            return null ;    
    };

    return result;
};

const typeOfElement = (element) => {
    if (typeof(element)=== "string") return "string";
    if (Array.isArray(element)) return "array";
    return null ;
}

const startendFinder = (start , end, elementLength) => {
     if (start < 0) start = elementLength + start;
     if (end < 0) end = elementLength + end;
 
     start = Math.max(0, start);
     end = Math.min(elementLength, end);

     return [start , end];
}

