---
title: MicroVision
summary: "Semantic log analysis that reconstructs microservice dependencies from high-volume system logs."
outcome: "Reconstructed service dependencies from 183,895 OpenStack log lines, reducing mapping time from days to minutes."
year: 2025
category: research
tags:
  - Python
  - ChromaDB
  - Drain3
  - Information retrieval
  - AI
highlights:
  - value: "183,895"
    label: "log lines processed"
    context: "Full benchmark"
  - value: "<12s"
    label: "parsing latency"
    context: "Full benchmark"
  - value: "38% → 54%"
    label: "precision improvement"
    context: "Full benchmark"
  - value: "25k → 1.2k"
    label: "templates reduced"
    context: "Full benchmark"
published: true
featured: true
sortOrder: 1
role: Software Engineering & Research Project
organization: Strathmore University
githubUrl: https://github.com/matilda1740/microvision
demoUrl: https://microvisionlogs.streamlit.app
thumbnail: /images/projects/microvision-dashboard.png
thumbnailAlt: "MicroVision dashboard showing a verified service dependency graph, system metrics, and validation status from a precomputed OpenStack log subset."
---

## The problem

MicroVision reconstructs the runtime architecture of a complex OpenStack deployment using raw system logs. It is designed for environments where a dependency map is needed but source-code access, distributed tracing, or prior knowledge of service endpoints is unavailable.

Microservice environments often lack an up-to-date view of how services interact. Static analysis can miss runtime behavior, while distributed tracing requires instrumentation that may be expensive or unavailable. Logs are abundant, but their volume and variability make them difficult to use directly for dependency discovery.

## My role

I designed and implemented the semantic analysis pipeline, including log parsing, vector retrieval, dependency validation, and graph generation.

## How it works

The pipeline ingests raw logs in batch or streaming form, samples representative data, and uses a customized Drain3 parser to extract reusable log templates while masking high-entropy values such as IP addresses and request IDs. The resulting templates are embedded with `all-mpnet-base-v2` and stored in ChromaDB for semantic retrieval.

Candidate relationships are then validated with an LLM-as-a-Judge layer. Instead of treating temporal co-occurrence as proof of a dependency, the validator considers the technical context of two log templates and filters likely coincidental edges. The accepted relationships are synthesized into an interactive dependency graph using NetworkX and PyVis, with a Streamlit interface for exploration and forensic analysis.

![MicroVision system architecture showing raw logs flowing through semantic parsing, ChromaDB vector storage, inference, validation, graph construction, and the Streamlit dashboard.](/images/projects/microvision-architecture.png)

## What changed

On the OpenStack benchmark, MicroVision processed 183,895 log lines and reduced parsing latency to under 12 seconds. Customized template masking reduced template bloat from approximately 25,000 templates to 1,200 core behaviors. The validation layer discarded 42% of candidate edges that were judged coincidental and increased precision from 38% to 54%.

The project reports a 0.54 precision score and a 35% precision improvement over the synthesis baseline. It also reduced the time required to map a new microservice environment from days to minutes. The dashboard includes an Alpha slider so operators can tune discovery sensitivity while inspecting inferred dependencies and supporting reasoning.

### Interactive demo subset

The linked Streamlit dashboard displays precomputed results from a representative subset of the full OpenStack dataset so the interactive demo can start quickly. In that subset, the dashboard shows 25 candidate edges, 24 verified edges, and 96% LLM validation precision. These values describe the demo artifact, not the full benchmark evaluation above.

## Constraints and lessons

The approach depends on the quality and representativeness of the available logs, the behavior of the embedding and retrieval layers, and the reliability of LLM-based validation. ChromaDB was selected for zero-configuration prototyping, while the current benchmark workflow uses pre-computed artifacts for fast demo startup.

## Next steps

The documented roadmap includes real-time stream processing through Kafka or ELK, anomaly detection using the semantic baseline, and multimodal fusion of log semantics with metric-based causal discovery.
