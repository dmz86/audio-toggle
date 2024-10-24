import { AudioToggle } from 'audio-toggle';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AudioToggle.echo({ value: inputValue })
}
