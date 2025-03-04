# Dvärgsilkesaporna - Gruppkontrakt

### Närvaro & kommunikation
Kommunikationen mellan gruppmedlemmarna sker via chatt och videomöten på Teams. Vid videomöten förväntas alla gruppmedlemmar att ha kameran på. Gruppen siktar på att ha ett "standup" möte vid kl. 08:45 för att kommunicera hur dagen kommer se ut för oss i gruppen.

Om gruppmedlemmar har förhinder eller är sjuka meddelas detta via Teams-chatten till resterande gruppmedlemmar så tidigt som möjligt. Alla gruppmedlemmar får då hjälpas åt att lägga upp en plan för att lösa eventuella problem som uppstår på grund av frånvaron.

### Kunskapsnivå & ambition
Gruppens medlemmar är fortfarande oerfarna när det kommer till Vue och har varierande kunskaper inom design. Målet och ambitionen med projektet är att alla gruppens medlemmar ska få ett godkänt slutbetyg.

### Språkbruk 
Alla gruppmedlemmar har förståelse för hur deras språkbruk behöver se ut för att skapa ett lyckat samarbete sinsemellan. 

### Commits
Vi ska använda oss av conventional commits och commits ska göras per fungerande "del" av feature.

### Linting- och prettier-konfiguration
Lint: 
rules: {
quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
'no-multiple-empty-lines': ['warn', { // Limit empty lines
  max: 1,        // General maximum
  maxEOF: 1,     // Maximum at end of file
  maxBOF: 0      // Maximum at beginning of file
}],
'eqeqeq': ['error', 'always'],  // Require === and !==,
'prefer-const': 'error',
'no-undef': 'warn', // No undefined variables,
'no-console': 'warn',
'no-unused-vars': 'warn', // No unused variables
'no-duplicate-imports': 'error'  // No multiple imports from same module
}

Prettier:
tabWidth: 2
semi: true
singleQuote: true

### Code reviews/merges - när får man merge:a in i branchen?
Om inga konflikter uppstår är det OK att merge;a in sina ändringar själv.
Finns risk för konflikter så flyttar man sin task i GitHub projects till "in review" där man checkar av med en annan gruppmedlem om det är ok att merga in sina ändringar i develop branchen.

### Backlogen
Ändringar i backlogen diskuteras på StandUp-möten eller informeras om i chatten. Detta för att hela gruppen ska vara delaktig i planeringen.

### Inaktivitet och påföljder
Är en gruppmedlem inaktiv i projektet och inte hör av sig till resterande gruppmedlemmar inom rimlig tid(ca 3 arbetsdagar) så blir gruppmedlemmen utesluten ur gruppen och utbildare informeras.

### Underskrivet av  
@EmelieBoss
@KodinGaston
@BlueMountain3d
@JHellberg04