---
title : Biases in embedding models
feed: show
date : 6-03-2025
---

# Executive Summary

Embedding models are the foundational layer of modern AI systems, powering everything from search engines and content recommendations to language translation and document classification. They're used both as building blocks for Large Language Models and as standalone applications.

To understand the scale of embedding model usage: Google processes over [8.5 billion](https://www.statista.com/statistics/268252/web-visitor-traffic-to-googlecom/) searches daily [using embeddings](https://blog.google/products/search/search-language-understanding-bert/); Spotify's recommendation system serves 574 million users through embedding-based [similarity matching](https://www.spotify.com/de-en/safetyandprivacy/understanding-recommendations); and numerous e-commerce platforms use embeddings for product recommendations. When a single LLM query is made, it typically triggers multiple embedding operations, from initial query processing to knowledge retrieval, meaning embedding operations vastly outnumber LLM queries even within LLM applications alone.

Yet despite their pervasive influence and outreach, they remain largely unregulated and might be amplifying gender biases across all AI applications.

I tested several embedding models from three major AI providers (OpenAI, Cohere, and Voyage), regarding gender-bias patterns, and I found effects in leadership recognition and professional competence evaluation. In practical terms, this means these models could be systematically undervaluing women's leadership potential and professional capabilities across virtually every AI-powered hiring, promotion, and evaluation system.

Despite their foundational role, embedding models may entirely escape regulation under current frameworks. For example, the EU AI Act primarily focuses on foundation models based on computational thresholds (measured in FLOPs) and training data size. However, even the most influential embedding models operate well below these thresholds while still having pervasive impact.

This creates a regulatory blind spot where these critical AI components avoid oversight despite their widespread influence on AI systems. To address this gap, I propose a three-tiered mandatory audit system aligned with application risk levels, complemented by a certification program that incentivizes bias mitigation.

# Key Findings

In this analysis I found patterns of gender bias across multiple domains, with particularly troubling implications for workplace equity. I measure bias using Cohen's d, a widely-accepted statistical measure that quantifies the magnitude of differences between groups while controlling for sample size and variability. This makes it particularly suitable for measuring societal biases, as it allows for meaningful comparisons across different contexts and studies. Using this metric (where 0.2 indicates small bias, 0.5 medium bias, and 0.8 large bias), I found systematic gender biases across three areas:

### Career advancement (d=0.16-0.22)

- While showing the lowest bias levels, these "small" biases affect the broadest range of decisions
- Present across all examined models, suggesting a pervasive foundation of gender bias
- Impacts routine hiring and job matching decisions, similar to the systematic discrimination found in [Amazon's abandoned AI recruiting tool](https://www.reuters.com/article/world/insight-amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK0AG/).

### Intelligence attribution (d=0.25-0.35)

- Consistent small-to-medium bias across all models in associating intellectual capacity with gender
- Directly impacts assessment of professional competence and technical capability
- Could systematically undervalue women's intellectual contributions in professional settings

### Leadership Recognition (d=0.42-0.61)

- Shows the strongest bias levels, reaching "medium to large" effect sizes
    
- Systematically associates leadership qualities with male terms
    
- Critical impact on promotion decisions and leadership potential assessment

!!! ADD JS ANIMATIONS (# AI Model Bias Analysis)

# Understanding embedding models

## What are embedding models?

Embedding models try to “teach” a computer to understand human language (or other modalities, but for this project, I focus on text only). However, computers can work with numbers only, not words. We need a way to transform words into numbers. This is where embedding models come in, they're AI's “translation” system, converting words into lists of numbers that capture meaning.

## How do they work?

To illustrate how they work, let's examine a simplified two-dimensional example. In this space, we represent animals using just two meaningful dimensions: their degree of domestication and their position on the cat/dog spectrum. Each animal is encoded as a pair of numbers, for example, "Pet Cat" becomes [0.90, 0.90], indicating both high domestication and strong feline characteristics, while "Wolf" is represented as [0.15, 0.10],indicating dog characteristics and wild nature. Embedding models are the translators that make sure similar concepts are positioned close to each other in the vector space.

!!! ADD JS ANIMATIONS (## Understanding Word Embeddings: Animal Classification)

When these models encode terms related to professional domains, such biases become evident in the geometric relationships between vectors. For example, the patterns found in this analysis of gender bias emerge from similar vector relationships, where terms associated with leadership or technical competence consistently show stronger geometric proximity to male-associated terms.

These examples uses just two dimensions for clarity, but production embedding models employ hundreds of dimensions to capture these complex semantic relationships, making their biases more subtle.

!!! ADD JS ANIMATIONS (## Understanding Word Embeddings: Professional roles)

## Why this matters?

Embedding models can be seen as AI's dictionary - but instead of definitions in words, they are numerical patterns that capture meaning. AI systems like ChatGPT, build on top of these fundamental word-to-number translations. It's the difference between having a dictionary (embeddings) and having a person who can use that dictionary to write novels (large language models).

This is why embedding models are so important: they're the foundation that other AI systems build upon. If an embedding model has biased patterns, like consistently placing "male" words closer to "leadership" concepts, this bias get baked into every AI system that uses it. It's like having a biased dictionary that subtly influences every book written using it.

Embedding models aren't just the building blocks of advanced AI like ChatGPT, they're also used in many everyday technologies on their own:

- **Resume Screening**: When applying for a job online, embedding models often match resume's content with job requirements, determining whether someone make it to the next round
- **Search Enhancement**: When users search for "beach vacation" and get results about "seaside holidays", that's embeddings understanding these phrases mean the same thing
- **Email Filtering**: Inbox sorts promotional emails from important ones using embeddings to understand message content
- **Content Recommendations**: Streaming services suggest "similar" movies or music by using embeddings to understand content similarity

## Policy gap

Current AI regulation primarily targets generative models like ChatGPT. This approach, while important, misses the challenges that embedding models bring. Their biases don't manifest as obviously discriminatory outputs, **but rather as subtle mathematical patterns that shape how AI systems interpret human concepts and relationships.**

What makes this particularly challenging is that these biases don't just affect individual decisions, they create systematic patterns of bias that ripple through multiple systems and applications. When a biased embedding model is used across hundreds of different AI applications, its effects could compound and amplify.

On top of this, current regulatory frameworks like the EU AI Act focus on computational capacity (10^25 FLOPs for model training). While FLOPs and parameters aren't directly equivalent, the number of parameters serves as a useful proxy for model scale, especially since parameter counts are more commonly disclosed than training FLOPs. This creates a critical oversight when we look at the scale difference

**Large Language Models (covered by regulation):**

- GPT-4: estimated 1.76 trillion parameters (closed source, estimation)
- GPT-3: estimated 175 billion parameters (closed source, estimation)
- Meta's Llama family (open source): 7B, 13B, 33B, and 65B parameters

**Embedding Models:** While the models analyzed in this study are closed source (OpenAI, Cohere, Voyage), we can estimate average embedding model size through MTEB ([Massive Text Embedding Benchmark](https://huggingface.co/spaces/mteb/leaderboard)). MTEB is the standard evaluation framework for embedding models, used by virtually every major provider to validate and compare their models' performance. As of writing, the largest model on MTEB has 46M parameters, which is less than 0.03% of the size of models targeted by current regulations. Even more telling, this largest model is an outlier, the next largest model has just 9.2M parameters. Even scaling up embedding models by 10x would still place them well below regulatory thresholds.

# Policy Recommendations

To address these challenges, I propose a policy framework, of tiered mandatory audits and a certification system. First, let's examine how existing regulatory frameworks approach AI governance:

!!! ADD JS ANIMATIONS (## Comparative Analysis of AI Regulatory Frameworks)
# Tiered mandatory audits

### Tier 1 - Critical Applications (Quarterly Audits)

- Healthcare systems (e.g., medical record analysis, diagnosis support)
- Employment decisions (hiring, promotion, performance evaluation)
- Financial services (loan assessment, credit scoring)
- Legal system applications

For these high-risk applications, where I found bias levels reaching d=0.42-0.61 in leadership contexts, I propose mandatory quarterly testing of embedding biases across three key dimensions: professional competence (e.g., "qualified," "expert"), leadership attributes (e.g., "leads," "directs"), and technical ability (e.g., "analyzes," "develops"). Each dimension requires statistical significance testing (p < 0.01) and documented Cohen's d values.

### Tier 2 - Significant Impact (Semi-Annual Audits)

- Educational tools and content recommendation systems
- Customer service and professional communication tools
- Professional assessment systems

For these applications, where this analysis revealed consistent intelligence attribution biases (d=0.25-0.35), organizations must implement corrective measures and document their effectiveness in the next audit cycle.

### Tier 3 - General Use (Annual Audits)

- Entertainment applications
- Personal productivity tools
- Non-critical business applications

For these lower-risk applications, where I observed smaller but persistent career-level biases (d=0.16-0.22), organizations must conduct basic bias screening, maintain clear documentation of known limitations, and submit annual user impact reports to ensure minimum safety standards while maintaining innovation flexibility.

# Certification system

The proposed certification framework aims to close the gap between mandatory requirements and market incentives. While mandatory audits establish minimum safety standards, a voluntary certification program can drive continuous improvement through market mechanisms and competitive advantage.

!!! ADD JS ANIMATIONS (## Certification System: Promoting Excellence in Embedding Model Fairness)

The certification system aims to create market incentives for reducing gender bias in embedding models, which is particularly valuable given that, as discussed by [McKinsey](https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/diversity%20wins%20how%20inclusion%20matters/diversity-wins-how-inclusion-matters-vf.pdf), companies with strong gender diversity show 25% higher profitability while workplace discrimination continues to carry significant costs, with the EEOC [securing $439.2 million](https://www.eeoc.gov/newsroom/eeoc-releases-fiscal-year-2020-enforcement-and-litigation-data) in discrimination settlements in 2020 alone.

# Action Guide

While this research demonstrates gender bias in embedding models, identifying the problem is only the first step. Stakeholders have different roles to play in addressing these challenges. Below is a practical guide for various groups to begin taking concrete action, based on the findings.

!!! ADD JS ANIMATIONS (## Taking Action on Embedding Model Bias)

# Technical Analysis

While I focused on gender bias, the methodology establishes a framework that can be extended to measure other forms of bias (e.g., racial, age-related). Using established statistical measures, I evaluate how strongly embedding models associate gender-specific terms with professional attributes, providing concrete metrics to inform policy decisions.

## Methodology

The analysis followed five key steps:

1. **Load configurations and data:**
    
    - Load model (Cohere, Voyage, OpenAI)
    - Target words: Gender-specific terms (he/she, man/woman)
    - Attribute words: Professional categories (career, leadership, etc.)
    - Templates: Standardized sentence structures for consistent testing
2. **Generating sentences:**
    
    - Target sentences: Testing gender terms across all attribute categories
    - Attribute sentences: Testing professional terms with category-specific contexts Example: "The role of a {doctor} is crucial" vs "Being a {nurse} involves caring for others"
3. **Fetch embeddings**
    
    - Generated embeddings for all test sentences and all models.analysis.analysis.
4. **Bias analysis:**
    
    - Cosine similarity between gender and professional terms
    - Association scores comparing gender-profession relationships
    - Effect size calculation (Cohen's d) for bias quantification All findings validated through permutation testing (p < 0.01)
5. **Statistical Validation:**
    
    - Negligible bias: d < 0.2
    - Small bias: 0.2 ≤ d < 0.5
    - Medium bias: 0.5 ≤ d < 0.8
    - Large bias: d ≥ 0.8

The complete technical implementation, including methodology, code, and detailed statistical analysis, is available in my [GitHub](https://github.com/CatStark/bluedot_project) repository.

All code and data are open-source and available for verification and further research.

# Conclusion

This analysis revealed systematic gender biases across all tested embedding models, with particularly concerning implications for workplace equity. The findings show a clear patter, from career advancement (d=0.16-0.22) to leadership recognition (d=0.42-0.61), these biases are embedded in the foundational layer of AI systems. What makes these findings more troubling is how they can compound with other tools, since these embedding models serve as building blocks for countless AI applications, from hiring systems to professional evaluation tools.

The proposed regulatory framework, combining mandatory audits with a certification system, offers a practical path forward. However, implementation will require coordinated work across stakeholders, from policymakers and AI providers to organizations using these systems.

Looking ahead, I believe this problem may become even more complex with multimodal models that combine text, images, and other data types. These models risk amplifying biases through cross-modal contamination, where gender stereotypes from one modality (for example, biased image representations) could reinforce biases in others (like text associations).

We are still on time to fix these biases before they become too deeply baked into AI systems, but we need to act quickly. Companies have been building AI tools on top of biased embedding models for years, making the problem harder to fix. We need clear regulations that motivates companies to be more open about their embedding models, how they're built, tested, and used. Without this transparency and accountability, these biases risk becoming permanent features of our AI-powered future.