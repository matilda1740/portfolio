---
title: InnoBid
summary: "A procurement-transparency product concept that uses anomaly detection to help applicants and procurement officers identify bids that fall outside expected pricing patterns."
outcome: "Won the Hackcorruption competition with a procurement-transparency concept and received a $10,000 development award."
year: 2022
category: design
tags:
  - Product design
  - Transparency
  - Hackathon
highlights:
  - value: "Winner"
    label: "Hackcorruption competition"
  - value: "$10,000"
    label: "development award"
  - value: "AI"
    label: "algorithm contribution"
published: true
featured: true
sortOrder: 3
role: Software Engineer and Founding Partner
organization: Accountability Lab
figmaUrl: https://www.figma.com/design/cQf9lDN0czKkzLpqKh6rk6/InnoBid?node-id=0-1&t=bfTaerIvrr3vUl0W-1
thumbnail: /images/projects/innobid-officer-review.png
thumbnailAlt: "InnoBid procurement officer prototype showing submitted bids, proposed prices, and colour-coded anomaly flags."
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

In the prototype, a tender applicant submits a bid and receives a pricing-range result while a procurement officer sees the corresponding flag alongside submitted bids. This creates a shared feedback loop: applicants receive an early signal about their proposed price, while officers can prioritize anomalous submissions for investigation.

The anomaly-detection implementation was forked from the [`RNN-Time-series-Anomaly-Detection`](https://github.com/chickenbestlover/RNN-Time-series-Anomaly-Detection) project.

![InnoBid applicant prototype showing feedback that a submitted bid's pricing is within range and has been posted.](/images/projects/innobid-applicant-feedback.png)

## My role

As the software engineer and a founding partner, I contributed to the product's design prototype and developed the anomaly-detection algorithm supporting the concept.

## Prototype workflow

The prototype separates applicant and procurement-officer experiences:

- Applicants browse and review a tender, submit their organisation and bid information, and receive pricing feedback.
- Procurement officers review submitted bids, compare proposed prices, interpret the anomaly flags, and accept or reject selected applications.

The status colours are decision-support signals. They do not determine the procurement outcome automatically.

## Prototype evidence

The [InnoBid Figma prototype](https://www.figma.com/design/cQf9lDN0czKkzLpqKh6rk6/InnoBid?node-id=0-1&t=bfTaerIvrr3vUl0W-1) is the public project artifact. It should be labelled as a design prototype, not a live application or source repository.

## What changed

The team won the Hackcorruption competition and received a $10,000 development award. InnoBid's intended contribution was an AI-assisted review signal for potentially anomalous bid pricing, while leaving the final procurement decision with human officers.

## Next steps

I would define and validate the public-data sources, calibrate the deviation thresholds, evaluate the detector against historical tender outcomes, test false-positive and false-negative rates, and turn the strongest prototype flow into an accessible, tested implementation.
