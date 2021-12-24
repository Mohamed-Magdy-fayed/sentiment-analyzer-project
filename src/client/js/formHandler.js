export async function post(url) {
    try {
        const response = await fetch('http://localhost:8081/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'url': url
            }),
        });
        const text = document.getElementById('text')
        const agreement = document.getElementById('agreement')
        const subjectivity = document.getElementById('subjectivity')
        const confidence = document.getElementById('confidence')
        const irony = document.getElementById('irony')
        const scoreTag = document.getElementById('score_tag')

        response.json().then(data => {
            let article = document.createElement('article')
            let fragment = document.createDocumentFragment()
            data.sentence_list.forEach(sentence => {
                if (sentence.text.length < 35) {
                    return
                } else {
                    let paragraph = document.createElement('p')
                    paragraph.textContent = sentence.text
                    fragment.appendChild(paragraph)
                    if (sentence.text.length > 200) {
                        paragraph.classList.add('section')
                    }
                }
            })
            article.appendChild(fragment)
            scoreTag.textContent = `${data.score_tag}`
            confidence.textContent = `${data.confidence}`
            agreement.textContent = `${data.agreement}`
            subjectivity.textContent = `${data.subjectivity}`
            irony.textContent = `${data.irony}`
            text.appendChild(article)
        });
    } catch (e) {
        console.log(e)
    }
}

export const handleSubmit = (e) => {
    e.preventDefault()

    // check if the user added a valid url
    let url = document.getElementById('url').value

    if (!Client.testURL(url)) {
        alert('Please add a valid URL!')
    } else {
        post(url)
    }
}
