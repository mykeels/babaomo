# BabaOmo
This is a group of code libraries and tests for determining the combined paternity index in paternity tests.

![Paternity Tests](http://dna-fingerprinting.weebly.com/uploads/4/5/0/6/4506479/769635783_orig.jpg)

<!--### Pseudocode

**Input**

- Let **prior_probability** be the Prior Probability of Paternity (between 0 and 1)
- Child DNA Loci _(list of Child Allele Pairs for each DNA Marker)_
- Father DNA Loci _(list of Father Allele Pairs for each DNA Marker)_
- Allele Frequency Data of Father's Population Group
- Mother DNA Loci _(Optional)_

**Output**

- Paternity Index for each DNA Marker Locus
- Combined Paternity Index
- Probability of Paternity
- Result Statement (Verdict)

**Processing**

- Get Paternity Indices (Paternity Index for each DNA Marker)
  - Let **ret_list** be a List of Numbers
  - For each locus in Father Loci Data
    - Let **X** be 0.5
    - If (father.Locus.A == father.Locus.B) Then
      - Let **X** be 1
    - Let **Y** be 0
    - Let **similar_allele** be the common Allele value in Father and Child
    - If (**similar_allele** exists and is not zero) Then
      - **Y** = corresponding frequency of **similar_allele** in Allele Frequency Data of Father's Population Group
    - If (**Y** == 0) Then
      - Add 0 to **ret_list**
    - Else
      - Add **X** / **Y** x 100 to **ret_list**
  - return **ret_list**
- Let **combined_paternity_index** be the product of all values in **GetPaternityIndices()**
- Get Probability of Paternity (Final Result)
  - return (**combined_paternity_index** x **prior_probability**) / 
  ((**combined_paternity_index** x **prior_probability**) + (1 - **prior_probability**)) x 100
- Get Result Statement
  - If (**probability_of_paternity** == 0)
    - The Man can be excluded as the Biological Father of the child
  - Else if (**probability_of_paternity** >= 90 && **probability_of_paternity** < 100)
    - The Man can NOT be excluded as the Biological Father of the Child
  - Else
    - Hmm, looks like we have made a mistake here ... This should never happen-->

## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

- @sharonikechi (Research)
- @nimisoere (UI/UX, HTML, CSS)
- @mykeels (C#, Angular)

## License

This work is provisioned under the MIT License