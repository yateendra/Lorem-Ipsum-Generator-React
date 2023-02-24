import React, { useState } from "react";

function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1);
  const [output, setOutput] = useState("");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.";

  function handleParagraphsChange(event) {
    setParagraphs(event.target.value);
  }

  function generateLoremIpsum() {
    let html = "";
    for (let i = 0; i < paragraphs; i++) {
      html += lorem;
    }
    setOutput(html);
  }

  function copyToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.value = output;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Output copied to clipboard!");
  }

  return (
    <body>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
          Lorem Ipsum Generator
        </h1>
        <p class="mx-auto mt-6 mb-6">
          Enter the number of paragraphs you want to generate:
        </p>
        <input
          id="paragraphs"
          type="number"
          className="border border-gray-400 rounded py-1 px-2 w-16"
          value={paragraphs}
          onChange={handleParagraphsChange}
        />
        <button
          className="block mx-auto mt-6 mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={generateLoremIpsum}
        >
          Generate
        </button>
        <div dangerouslySetInnerHTML={{ __html: output }}></div>
        {output.length > 1 && (
          <button
            className="mx-auto w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-1 border border-blue-500 hover:border-transparent rounded"
            onClick={copyToClipboard}
          >
            Copy to clipboard
          </button>
        )}
      </div>
    </body>
  );
}

export default LoremIpsumGenerator;
