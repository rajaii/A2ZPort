function longestWordInSentence(sentence) {
  //split sentence
  const splitSentence = sentence.split(' ');

  //set counter and regex and string to return
  let longest = [''];
  const regex = /[a-zA-Z]/;

  //loop running counter and tracking longest
  for (let i = 0; i < splitSentence.length; i++) {
    let count = 0;
    for (let j = 0; j < splitSentence[i].length; j++) {
      if (regex.test(splitSentence[i][j])) {
        count += 1;
      }
    }

    if (count > longest[0].length) {
      longest = [splitSentence[i]];
    } else if (count > 0 && count === longest[0].length) {
      longest.push(splitSentence[i]);
    }
  }

  const punctuation = /[^A-Za-z]/g;
  //count vowels because more than one longest word
  if (longest.length > 1) {
    const vowels = /[aeiou+]/;
    const counts = [];
    for (let i = 0; i < longest.length; i++) {
      let count = 0;
      for (let j = 0; j < longest[i].length; j++) {
        if (vowels.test(longest[i][j])) {
          count += 1;
        }
      }
      counts.push(count);
    }

    let indexOfLongest = counts.indexOf(Math.max(...counts));
    return longest[indexOfLongest].replace(punctuation, '');
  }

  //1 longest so return that
  if (longest.length === 1 && longest[0].length > 0) {
    return longest[0].replace(punctuation, '');
  }

  //return whatever would be expected in the no longest case would have asked interviewer
  return '';
}
