import { introTopic } from './introData';
import { reasoningTopics } from './reasoningData';
import { quantTopics } from './quantData';
import { verbalTopics } from './verbalData';

export const allTopics = [
  introTopic,
  ...reasoningTopics,
  ...quantTopics,
  ...verbalTopics
];

export const categories = [
  { id: 'all', name: 'All Modules' },
  { id: 'Exam Pattern', name: 'Exam Pattern' },
  { id: 'Reasoning Ability', name: 'Reasoning Ability' },
  { id: 'Quantitative Aptitude', name: 'Quantitative Aptitude' },
  { id: 'Verbal Ability', name: 'Verbal Ability' }
];

export function getTopicById(id) {
  return allTopics.find(t => t.id === id);
}

export function getTotalStats() {
  const totalTopics = allTopics.length;
  const totalQuestions = allTopics.reduce((sum, t) => sum + (t.questions ? t.questions.length : 0), 0);
  return { totalTopics, totalQuestions };
}
