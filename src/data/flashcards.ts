export interface FlashcardData {
  id: string;
  unit: string;
  front: {
    chinese: string;
    pinyin: string;
  };
  back: {
    english: string;
    context: string;
    videoUrl: string;
  };
}

export const flashcards: FlashcardData[] = [
  {
    id: '1',
    unit: 'Unit 1: 聽說',
    front: { chinese: '聽說那部電影不好看。', pinyin: 'Tīngshuō nà bù diànyǐng bù hǎokàn.' },
    back: { english: 'I heard that movie is not good.', context: 'Politely indicating that the speaker does not want to watch the movie.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '2',
    unit: 'Unit 2: 比較',
    front: { chinese: '我比較常去運動。', pinyin: 'Wǒ bǐjiào cháng qù yùndòng.' },
    back: { english: 'I exercise more often.', context: 'Politely indicating that the speaker prefers to exercise alone.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '3',
    unit: 'Unit 3: 但是',
    front: { chinese: '我有空，但是我有事。', pinyin: 'Wǒ yǒu kòng, dànshì wǒ yǒushì.' },
    back: { english: 'I am free, but I have things to do.', context: 'Politely indicating that the speaker does not want to meet.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '4',
    unit: 'Unit 4: 可能',
    front: { chinese: '這個週末可能沒有空。', pinyin: 'Zhège zhōumò kěnéng méiyǒu kòng.' },
    back: { english: 'I might not be free this weekend.', context: 'Polite refusal.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '5',
    unit: 'Unit 5: 不好意思',
    front: { chinese: '不好意思，下次運動可以請你準時嗎？', pinyin: 'Bù hǎoyìsi, xià cì yùndòng kěyǐ qǐng nǐ zhǔnshí ma?' },
    back: { english: 'Excuse me, could you please be on time for our next exercise?', context: 'Politely pointing out that the person was late last time.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '6',
    unit: 'Unit 6: 想一下',
    front: { chinese: '想一下。', pinyin: 'Xiǎng yīxià.' },
    back: { english: 'Let me think about it.', context: 'The speaker really needs time to think.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '7',
    unit: 'Unit 7: 好像',
    front: { chinese: '他今天好像不太高興。', pinyin: 'Tā jīntiān hǎoxiàng bù tài gāoxìng.' },
    back: { english: 'He seems a bit unhappy today.', context: 'Indirectly suggesting that others should not argue with him.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  },
  {
    id: '8',
    unit: 'Unit 8: Verb Reduplication',
    front: { chinese: '我給你介紹介紹。', pinyin: 'Wǒ gěi nǐ jièshào jièshào.' },
    back: { english: 'Let me introduce you.', context: 'The second sentence sounds more polite and softer.', videoUrl: 'https://www.youtube.com/embed/EgZKSWjwtok' }
  }
];
