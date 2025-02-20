---
sidebar_position: 8
title:  Plugins
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Overview
Plugins greatly enhance OsmAnd functionality. Each of them is designed to solve a separate problem, such as trip recording, getting Wikipedia articles offline, putting additional terrain data or street-level views on the map etc.
Plugins can be internal (you can turn them on inside the OsmAnd app) or external (separately installed programs). 3rd party plugins work via OsmAnd API and can get access to OsmAnd data. 

## Configure plugin
In order to get access to the specific functions, provided by a plugin, it must be [enabled first](#enable--disable). You need to [purchase](#purchase) some plugins before use. In some cases special map layer should be activated or user profile should be [configured](#plugin-settings).

### Enable / disable

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable / disable plugins go to:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To enable / disable plugins go to:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plugins"/> → &#10003;

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Purchase

Most plugins are available for free, only three of them require purchase of OsmAnd+ or OsmAnd Pro license before use: 
 - [Contour lines and Terrain](../plugins/contour-lines.md#overview) 
 - [Wikipedia](../plugins/wikipedia.md#overview)
 - [Nautical map view](../plugins/nautical-charts.md#overview)
   
Detailed information about the purchase of the application can be found in the section [Purchase](../purchases/).
### Plugin Features

OsmAnd Plugins could countribute to these Feature groups: **Layer**, **Widgets**, **Context Menu actions**, **Drawer actions**, **Map Style**, **Map Source**, **Profile**.

| Feature Group | Plugin  | How to configure |
|---------------|---------|------------------|
| Widgets | Recording ...     | Configure Screen |
| Layer | ...     | Configure Map |
| Context menu Actions | .... |   |

🤖 - only for Android version.

| Plugin name |[Map layer](../map) |Context menu|[Widget](../widgets)|[Profile](../personal/profiles.md) |
|:--------|:-------|:-------|:-------|:-------|
|[Online maps](#online-maps)| ✔ | ✔ | - |  ✔ |
|[Contour lines and Terrain](#contour-lines-and-terrain) | ✔ | - | - |  ✔ |
|[Wikipedia](#wikipedia) | ✔ | ✔ | - |  ✔ |
|[Trip recording](#trip-recording) | ✔ | ✔ | ✔ |  ✔ |
|[Parking position](#parking-position)| ✔ | ✔ | ✔ |  ✔ |
|[Audio/video notes](#audiovideo-notes)| ✔ | ✔ | ✔ |  ✔ |
|[Ski map view](#ski-map-view)| ✔ | - | - |  ✔ |
|[Nautical map view](#nautical-map-view)| ✔ | - | - |  ✔ |
|[OpenStreetMap editing](#openstreetmap-editing)| ✔ | ✔ | - |  ✔ |
|[Mapillary](#mapillary)| ✔ | ✔ | ✔ | - |  ✔ |
|[OpenPlaceReviews](#openplacereviews)| ✔ | ✔ | - |  ✔ |
|[Weather](../plugins/weather.md)| ✔ | ✔ | ✔ |  ✔ |
|🤖 External Sensors| - | - | ✔ |  ✔ |
|🤖 [OsmAnd Tracker](#osmand-tracker)| ✔ | - | ✔ | ✔ |
|[OsmAnd development](#osmand-development)| - | - | ✔ | ✔ |
|🤖 [Accessibility](#accessibility)| - | - | - | - |


### Plugin Settings

Here will be description of specific plugin settings. 

## List

### [Wikipedia](./wikipedia.md)

Having Wikipedia with you on a trip helps to learn more about the places you are visiting. It is available offline, and shows the Wikipedia articles in relation to the points of interest directly on the map.

### [Online maps](./online-map.md)

Online layers.

### [Trip recording](./trip-recording.md)

To tell a story of where you have been, GPS data, as latitude and longitude of your location, can be recorded and stored in a file, and then re-used, improved, added with waypoints, provided for navigation, shared with friends, etc.

### [Contour lines and Terrain](./contour-lines.md)

Terrain information, such as Contour lines, Hillshades, Slopes - helps to make a visual assessment of the shape of the land surface by considering the curvature, extremes, steepness, points of equal height, and other.

### [Nautical map view](./nautical-charts.md)

Nautical map provides detailed graphical representation of oceans, seas, coastal areas and rivers to help you navigate on the water, and be aware of popular traffic routes, obstacles in your waterway, the nearest harbors, anchorages, and other essential reference.

### [Ski map view](./ski-maps.md)

Ski map view shows winter colors and pistes - ski paths down a mountain or cross-country - as well as cableways, chairlifts, amenities and services nearby, which are useful in navigating through the destinations like recreational areas, ski resorts, and terrain parks.

### [Audio/video notes](./audio-video-notes.md)

Audio/video notes for future reference in case of need, or just to remember the moment, scene, or interaction, once made, are available from the central storage as well as on the map as an individual layer of user-made stories and thoughts tied to a geolocation. For Android only.

### [Parking position](./parking.md)

Setting a point on the map of where your car is left in the street, and a calendar notice of when the parking time started to count down, will comfort your efforts in keeping track of the time and the car location.

### [OpenStreetMap editing](./osm-editing.md)

Make contributions to OpenStreetMap.

### [OpenPlaceReviews](./openplacereviews.md)

OpenPlaceReviews

### [Mapillary](./mapillary.md)

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).


### [Accessibility](./accessibility.md)

Accessibility plugin makes the device's accessibility features directly available in OsmAnd.


### [External sensors](./external-sensors.md)

Connect external sensors to display data in OsmAnd.

### [Weather](./weather.md)

24h hourly forecast 7 days ahead on the map.

### [OsmAnd development](./development.md)

OsmAnd development plugin is only necessary for developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.


### [OsmAnd Tracker](./osmand-tracker.md)

OsmAnd Tracker




