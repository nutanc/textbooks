# Real Numbers

## Euclid’s Division Lemma

> section: divison
> color: "#BB4726"

A trader was moving along a road selling eggs. An idler who didn't have
much work to do, started to get the trader into a wordy duel. This grew into a
fight, he pulled the basket with eggs and dashed it on the floor. The eggs broke.
The trader requested the Panchayat to ask the idler to pay for the broken eggs.
The Panchayat asked the trader how many eggs were broken. He gave the
following response:

If counted in pairs, one will remain;

If counted in threes, two will remain;

If counted in fours, three will remain;

If counted in fives, four will remain;

If counted in sixes, five will remain;

If counted in sevens, nothing will remain;

My basket cannot accomodate more than 150 eggs.

So, how many eggs were there?

Let us take the facts given to us and write the corresponding equations to see if we can glean some insights. Converting a problem statement in english to mathematical language(variable) form is the first step to solving problems. Let's go through the facts one by one:

1. My basket cannot accomodate more than 150 eggs. So if we assume 'a' to be the number of eggs, then a is less than or equal to 150.
2. If counted in pairs, one will remain; So we know 'a' is a odd number and can be represented as a=[[2u+1|3u+1|4u+1]].
3. If counted in threes, two will remain; If we assume there are 't' groups of 3 we can represent a=[[3t+2|2t+2|4t+2]].
4. Similarly we get a=4s+3, a=5w+4, a=6q+5, a=7p+0 from the remaining facts.

That is, in each case, we have a and a positive integer b (in our example,
b takes values 7, 6, 5, 4, 3 and 2, respectively) which divides a and leaves a remainder
r (in our case, r is 0, 5, 4, 3, 2 and 1, respectively), that is smaller than b.

From the facts, clearly a is a mulitple of [[7|6|5|4|3|2]].

Also, from all the equations we see that when divided by 2,3,4,5,6 the remainder is always one less than the divisor(6q+5, 5w+4 etc).

So 'a' is one less than the LCM of 2,3,4,5,6.

The LCM of 2,3,4,5,6 is [[60]]

---

So x can be 60-1=59. 

But 59 does not satisfy one fact from the equations of the puzzle.[[It is not divisible by 7| It is not less than 150| It is not divisible by 2]]

The next multiple of 60 is 120 and hence 'a' can be [[119]].

You will find that this value satisfies all the equations above.

Great. It's good we solved the puzzle. But how did that help us to learn about Euclid's lemma?

When we were writing the equations for the facts, we found that for any number we were able to represent it as a=b*q+r. It turns out that this is true for all positive integers.


::: .theorem
Given positive integers a and b, there exist unique integers q and r satisfying a = bq + r, 0 ≤ r < b.
:::

Turns out, we can use this lemma to find the HCF of two numbers. Lets see.

Find the HCF of 455 and 42.

Using Euclid's lemma we should be able to get 455 using 42. 455=42*[[10]]+[[35]]

{.reveal(when="blank-6")} Now consider 42 and 35. 42= 35*[[1]]+[[7]]

{.reveal(when="blank-8")} Repeating as above consider 35 and 7. 35= 7*[[5]]+[[0]]

{.reveal(when="blank-10")} We have got a remainder of 0. So we can stop. The divisor at this is stage is 7 and that is the HCF of 455 and 42.


---

## The Fundamental Theorem of Arithmetic

> section: fundamental

We have seen that any natural number can be written as a
product of its prime factors. For instance, 2 = 2, 4 = 2 × 2, 253 = 11 × 23. The more we see, the more it seems that all natural numbers can be obtained by multiplying prime numbers.

Pick any natural number, let us say 44, if we factorize it with just primes we get [[2]]*[[2]]*[[11]].

What about 1771? 1771=[[7]]*[[11]]*[[23]]

Since the number of prime numbers are infinite and any composite number we take seems to be factorized into just prime numbers, we can make a conjecture that any composite number can be written as a product of powers of prime. This is known as **Fundamental Theorem of Arithmetic**.

::: .theorem

Every composite number
can be expressed ( factorised) as a product of primes, and this factorisation is
unique, apart from the order in which the prime factors occur.

:::

The fundamental theorem also has a solved proof. Interested students can check it out at [Proof of Fundamental Theorem of Arithmetic](https://www.math.uh.edu/~minru/spring11/fundamental-theorem.pdf)

Since the theorem is proved, it means that it will always hold true in the world of mathematics. That means we can take this as fact and then build on top of it for more intersting conclusions.

For example, Consider the numbers `4^n`, where n is a natural number. Check whether
there is any value of n for which `4^n` ends with the digit zero.

Solution : If the number `4^n`, for any n, were to end with the digit zero, then it would be
divisible by the prime number [[5]]. 

{.reveal(when="blank-6")} That is, the prime factorisation of `4^n` would contain the prime 5. This is not possible because `4^n = (2)2^n`; so the only prime in the factorisation of `4^n` is 2. So, the uniqueness of the Fundamental Theorem of Arithmetic guarantees that there are noother primes in the factorisation of `4^n` . So, there is no natural number n for which `4^n` ends with the digit zero.

{.reveal(when="blank-6")} So we took the uniqueness part of the theorem and applied it to quickly deduct the point that `4^n` will never end with zero for all n belongs to natural numbers.

---

### HCF and LCM

We have already learnt how to find HCF and LCM earlier. The prime factorization method actually uses the Fundamental Theorem of Arithmetic to gets its result. Let us quick;y revisit with an example.

Find the HCF and LCM of 6 and 20.

Solution:

Prime factors of 6=[[2]]*[[3]].

{.reveal(when="blank-1")} 6= `2^1*3`

Prime factors of 20=[[2]]*[[2]]**[[5]]

{.reveal(when="blank-4")} 20= `2^2*5`

---
So HCF(6,20)=[[2]] and LCM(6,20)= [[60]]

{.reveal(when="blank-1")} HCF(6, 20) = `2^1` = Product of the smallest power of each common prime factor in the numbers.

{.reveal(when="blank-1")} LCM (6, 20) = `2^2 × 3^1 × 5^1` = Product of the greatest power of each prime factor,involved in the numbers.

---

In the example above we can see that HCF(6, 20) × LCM(6, 20) = 2*60=120.

But 6*20 is also equal to 120.

In fact, it can be proven that for any a,b, HCF(a,b)*LCM(a,b)=a*b. This will easily enable us to find the HCF or the LCM if the other is given.

---

## Revisiting Irrational Numbers

> section: irrational

Recall, a number ‘s’ is called irrational if it cannot be written in the form ,`p/q` where p and q are integers and q ≠ 0. Can we prove that some numbers are irrational? How can we prove that some numbers cannot be written in the form of `p/q`.

To prove that a number like `sqrt(2)` is irrational we need some help. We first need to prove the following:

::: .theorem

Let p be a prime number. If p divides `a^2`, then p divides a, where a is a positive integer.

We know from before that every number can be represented by its prime factors.

Let a=p1p2p3...pn, where p1,p2 etc are primes.

Then we have `a^2`=(p1p2p3....pn)(p1p2p3....pn)=`p1^2`*`p2^2`*`p3^2`*....`pn^2`.

We are given the fact that p divides `a^2`. That means from Fundamental Theorem of Arithmetic, p is a prime factor of `a^2` and p is one of p1,p2,p3,....pn.

But we assumed a=p1p2p3....pn. And we just proved that p is one of p1,p2,p3,....pn.

From this we can clearly see p divides a.

:::

Let us now try to prove `sqrt(2)` is irrational.

::: .theorem

Let us say `sqrt(2)` is rational.

That means we have a p and q such that `sqrt(2)=p/q`.

Suppose p and q have a common factor other than 1. Then, we divide by the common factor to get ,`sqrt(2)= a/b` where a and b are coprime.

Basically we try to remove the common factors between p and q so that there are no common factors excpet 1 which makes a and b as coprimes.

Squaring on both sides of the equation we get 2=`a^2/b^2`

That is `2b^2=a^2`. Therefore 2 divides `a^2` which means 2 divides a(which we proved in the above theorem).

If 2 divides a then we can write a=2c for some integer c.

Substituting for a we get `2b^2=(2*c)^2`

That is `2b^2=4c^2`

This leads to `b^2=2c^2`

That means `b^2` is divided by 2 which means b is divided by 2.

So a is divided by 2 and b is divided by 2. But this is not possible as a and b are coprimes. We have reached an impossible state in our world. We reached this state because we made a wrong assumption. The assumption that `sqrt(2)` is rational. Since this assumption is wrong we are left with only one alternative.

And that is, `sqrt(2)` is irrational.

This approach of proving things is known as proof by contradiction.

:::

---

## Revisiting Rational Numbers and Their Decimal Expansions

> section: rational

We have studied earlier that rational numbers have either a terminating decimal
expansion or a non-terminating repeating decimal expansion. In this section, we are
going to consider a rational number, say `p/q`, q ≠ 0, and explore exactly when the decimal expansion of `p/q` is terminating and when it is non-terminating repeating(or recurring).

To come up with some hypothesis we first start with some concrete examples. Let us take some decimals and convert them into `p/q` form and see if we can identify some patterns.

0.375=`375/1000`=`375/10^3`

0.0875=`875/10000`=`875/10^4`

23.3456=`233456/10000`=`233456/10^4`

We can see a clear pattern. All the denominators are powers of [[10]].

If we want to rewrite 10 as a product of prime factors we can use the primes [[2]] and [[5]]. 

Even though, we have worked only with a few examples, you can see that any
real number which has a decimal expansion that terminates can be expressed as a
rational number whose denominator is a power of 10. Also the only prime factors of 10
are 2 and 5. So, cancelling out the common factors between the numerator and the
denominator, we find that this real number is a rational number of the form ,`p/q` where
the prime factorisation of q is of the form `2^n5^m`, and n, m are some non-negative integers.

Formally we can define the theorem as:

::: .theorem

Let x = p/q be a rational number, such that the prime factorisation
of q is of the form `2^n* 5^m` , where n, m are non-negative integers. Then x has a
decimal expansion which terminates.

:::

Now, if we consider any non terminating and recurring rational nu,bers like 1/7, 2/3, 7/11 etc we see that the denominators are not of the form `2^n * 5^m`.

So we can define the theorem as 

::: .theorem

Let x = p/q , where p and q are coprimes, be a rational number,
such that the prime factorisation of q is not of the form `2^n*5^m` , where n, m are
non-negative integers. Then, x has a decimal expansion which is non-terminating
repeating (recurring).

:::

With the help of these theorems we can quickly find out if a rational number of the form p/q is terminating or non terminating. You can do so using the following steps.

1. Find out if q can be represented as a power of the prime factors 2 or 5.
2. If yes, its terminating. If not, it's non terminating.

For example, consider 3/8. Here 8 can be represented as `2^3`. So it is terminating. We can chek it easily as below

3/8=`3/2^3`=`(3*5^3)/(2^3*5^3)`=`375/10^3`=0.375.