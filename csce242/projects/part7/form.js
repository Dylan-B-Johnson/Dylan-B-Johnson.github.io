const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });
        return response;
    } catch(error) {
        console.log(error);
        result.innerHTML = "Failed to send email.";
    }
};

document.getElementById("contact-me").onsubmit = async(e) => {
    e.preventDefault();
    const json = JSON.stringify(Object.fromEntries(new FormData(e.target)));
    const result = document.getElementById("form-result");
    result.innerHTML = "Sending email...";
    const httpResult = await sendEmail(json);
    if (httpResult.status == 200) {
        result.innerHTML = "Email sent.";
    } else {
        result.innerHTML = "Failed to send email.";
    }
}
