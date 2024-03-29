const getStoredBookApplication = () =>{
    const readBookApplication = localStorage.getItem('book-Application');
    if(readBookApplication){
        return JSON.parse(readBookApplication);
    }
    return []
}

const saveReadBook = bookId =>{
    const readBookApplications = getStoredBookApplication();
    const exists = readBookApplications.find(bokId => bokId === bookId);
    if(!exists){
        readBookApplications.push(bookId);
        localStorage.setItem('book-Application', JSON.stringify(readBookApplications))
    }
}

export {getStoredBookApplication, saveReadBook}