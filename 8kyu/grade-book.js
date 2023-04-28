// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    // Code here
    let averageScore = (s1 + s2 + s3) / 3
    switch(true){
        case averageScore < 60:
          return 'F';
        case averageScore < 70:
          return 'D';
        case averageScore < 80:
          return 'C';
        case averageScore < 90:
          return 'B';
        case averageScore <= 100:
          return 'A';
    }
}