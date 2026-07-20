/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  scale: string;
  image: string;
  description: string;
  architects: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Insight {
  id: string;
  title: string;
  category: "Research" | "Engineering" | "Sustainability" | "Publication";
  date: string;
  readTime: string;
  image: string;
  author: string;
  summary: string;
  content: string[];
}
