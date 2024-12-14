// src/components/JobCard.tsx
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Job} from '../types/types';

interface JobCardProps {
  job: Job;
  onPress: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({job, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>

        {/* Locations */}
        {job.locations && job.locations[0] && (
          <View style={styles.locationBadge}>
            <Text style={styles.locationText}>{job.locations[0].name}</Text>
          </View>
        )}

        {/* Level */}
        {job.levels && job.levels[0] && (
          <Text style={styles.levelText}>
            {job.levels[0].short_name || job.levels[0].name}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  locationBadge: {
    backgroundColor: '#ff4757',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
  },
  levelText: {
    color: '#ff4757',
    fontSize: 14,
    fontWeight: '500',
  },
});
