/********************************************************************************
* Run the song through a low-pass filter to isolate the kick drum
* Identify peaks in the song, which we can interpret as drum hits
* Create an array composed of the most common intervals between drum hits
* Group the count of those intervals by tempos they might represent.
    We assume that any interval is some power-of-two of the length of a measure
    We assume the tempo is between 90-180BPM
Select the tempo that the highest number of intervals point to
********************************************************************************/

/*
* Function to identify peaks
*/
function getPeaksAtThreshold(data, threshold) {
  var peaksArray = [];
  var length = data.length;
  for (var i = 0; i < length;) {
    if (data[i] > threshold) {
      peaksArray.push(i);
      // Skip forward ~ 1/4s to get past this peak.
      i += 10000;
    }
    i++;
  }
  return peaksArray;
}

/*
* Filtering
*/
function processLPF(offlineContext, buffer) {
  // Create buffer source
  var source = offlineContext.createBufferSource();
  source.buffer = buffer;

  // Create filter
  var filter = offlineContext.createBiquadFilter();
  filter.type = "lowpass";

  // Pipe the song into the filter, and the filter into the offline context
  source.connect(filter);
  filter.connect(offlineContext.destination);

  // Schedule the song to start playing at time:0
  source.start(0);

  // Render the song
  offlineContext.startRendering();
}

/*
* Function used to return a histogram of peak intervals
*/
function countIntervalsBetweenNearbyPeaks(peaks) {
  var intervalCounts = [];
  peaks.forEach(function(peak, index) {
    for(var i = 0; i < 10; i++) {
      var interval = peaks[index + i] - peak;
      var foundInterval = intervalCounts.some(function(intervalCount) {
        if (intervalCount.interval === interval)
          return intervalCount.count++;
      });
      if (!foundInterval) {
        intervalCounts.push({
          interval: interval,
          count: 1
        });
      }
    }
  });
  return intervalCounts;
}

/*
* Function used to return a histogram of tempo candidates.
*/
function groupNeighborsByTempo(intervalCounts) {
  var tempoCounts = []
  intervalCounts.forEach(function(intervalCount, i) {
    // Convert an interval to tempo
    var theoreticalTempo = 60 / (intervalCount.interval / 44100 );

    if (!isNaN(theoreticalTempo)) {
      // Adjust the tempo to fit within the 90-180 BPM range
      //while (theoreticalTempo < 90) theoreticalTempo *= 2;
      //while (theoreticalTempo > 180) theoreticalTempo /= 2;
      /*if (theoreticalTempo < 90) {
        theoreticalTempo *= 2;
      }
      if (theoreticalTempo > 180) {
        theoreticalTempo /= 2;
      }*/

      var foundTempo = tempoCounts.some(function(tempoCount) {
        if (tempoCount.tempo === theoreticalTempo)
          return tempoCount.count += intervalCount.count;
      });
      if (!foundTempo) {
        tempoCounts.push({
          tempo: theoreticalTempo,
          count: intervalCount.count
        });
      }
    }
  });

  return tempoCounts;
}
