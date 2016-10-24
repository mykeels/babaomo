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