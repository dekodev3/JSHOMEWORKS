//Second Excercise

let BookStatus = {
    title: prompt('Enter the title of the book'),
    author: prompt('Enter the author of the book'),
    readingStatus: prompt('Have you read the book? Yes/No'),
    returnInfo: function(){
        if(this.readingStatus == "yes"){
            alert(`Already read ${this.title} by ${this.author}`)
    }
        else{
            alert(`You still need to read ${this.title} by ${this.author}`)
    }
   }
}

BookStatus.returnInfo();