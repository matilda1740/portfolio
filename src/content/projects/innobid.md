---
title: InnoBid
summary: "A procurement-transparency product concept that uses anomaly detection to help applicants and procurement officers identify bids that fall outside expected pricing patterns."
outcome: "Built a procurement-transparency prototype that won Hackcorruption and received a $10,000 development award."
year: 2022
category: design
tags:
  - Public Procurement
  - Transparency
  - Product Design
  - Anomaly Detection
published: true
featured: true
sortOrder: 3
role: Software Engineer and Founding Partner
organization: Accountability Lab
figmaUrl: https://www.figma.com/design/cQf9lDN0czKkzLpqKh6rk6/InnoBid?node-id=0-1&t=bfTaerIvrr3vUl0W-1
thumbnail: /images/projects/innobid-hero.png
thumbnailAlt: "InnoBid procurement officer prototype showing submitted bids, proposed prices, and colour-coded anomaly flags."
thumbnailWidth: 1600
thumbnailHeight: 800
---

## The challenge

Procurement teams need a practical way to identify bids whose prices differ materially from historical patterns. InnoBid explored an anomaly-detection workflow for government procurement during the Hackcorruption Hackathon organized by Accountability Lab. The project remained at the conceptual prototype stage, so the screens describe an intended workflow rather than a deployed procurement platform.

## The proposed solution

The proposed system would compare a new bid with historical tender data and flag pricing that falls outside an expected range around the historical median. The resulting signal would help procurement officers prioritize bids for review without replacing human judgement.

## Anomaly-detection approach

The proposed algorithm is an anomaly detector intended to identify suspicious procurement pricing patterns. It would analyse tender data from public sources and compare each new bid with historical data. Bids would be grouped by deviation from an expected range around the historical median:

- **Within expected range (green):** the proposed price is consistent with the historical pricing baseline.
- **Moderate deviation (yellow):** the proposed price differs from the expected range and may require review.
- **Significant deviation (red):** the proposed price is substantially outside the expected range and warrants closer investigation.

In the prototype, a tender applicant completes an application with the organisation and tenderer details required to submit a bid. Those submitted details feed the procurement-officer view alongside the proposed price and anomaly flag, allowing officers to prioritize anomalous bids for investigation.

The anomaly-detection implementation was forked from the [`RNN-Time-series-Anomaly-Detection`](https://github.com/chickenbestlover/RNN-Time-series-Anomaly-Detection) project.

<figure class="project-evidence project-evidence--interface">
  <img src="/images/projects/innobid-application-form.png" alt="InnoBid applicant prototype application form for general tenderer information, including legal name, registration number, address, contact details and organisational structure." width="1371" height="1000" loading="lazy" decoding="async" />
  <figcaption>InnoBid application form — tenderer and organisational details submitted by applicants; a prototype, not a deployed procurement system.</figcaption>
</figure>

## Prototype workflow

The prototype separates applicant and procurement-officer experiences:

- Applicants browse and review a tender, complete tenderer and organisational information, and submit their bid.
- Procurement officers review submitted bids, compare proposed prices, interpret the anomaly flags, and accept or reject selected applications.

The status colours are decision-support signals. They do not determine the procurement outcome automatically.

## What changed

InnoBid’s intended contribution is an AI-assisted review signal for potentially anomalous bid pricing, while leaving the final procurement decision with human officers.
